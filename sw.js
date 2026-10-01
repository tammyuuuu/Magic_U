/* Native multi-page PWA. Business records are never stored or cleared here. */
const BASE = new URL('./', self.location.href);
const PREFIX = `magic-u:${BASE.pathname}:`;
const APP_CACHE = `${PREFIX}app-v1`;
const CARD_CACHE = `${PREFIX}cards-v1`;
const CORE_PAGES = [
  'index.html', 'journey.html', 'daily_card.html', 'divination.html',
  'handbook.html', 'handbook_daily.html', 'daily_archive.html',
  'handbook_readings.html', 'handbook_spreads.html', 'offline.html'
];
const CORE_EXTRAS = ['manifest.json', 'pwa-client.js', 'offline-card.svg'];
const NETWORK_TIMEOUT = 1800;
const pending = new Map();

function inScope(url) {
  return url.origin === BASE.origin && url.pathname.startsWith(BASE.pathname);
}

function cacheKey(request) {
  const url = new URL(typeof request === 'string' ? request : request.url, BASE);
  // HTML is a static template; card/date/stage parameters are read by page JS.
  if (url.pathname === BASE.pathname) url.pathname += 'index.html';
  if (url.pathname.endsWith('.html')) url.search = '';
  else url.searchParams.delete('v');
  url.hash = '';
  return url.href;
}

async function readCache(name, key) {
  try { return await (await caches.open(name)).match(key); }
  catch { return undefined; }
}

async function store(name, key, response) {
  if (!response.ok || response.status === 206) return;
  if (response.url && !inScope(new URL(response.url))) return;
  try { await (await caches.open(name)).put(key, response.clone()); }
  catch (error) { console.warn('Magic_U resource cache unavailable:', error); }
}

function refresh(request, cacheName, key) {
  const id = `${cacheName}:${key}`;
  if (!pending.has(id)) {
    // Revalidate through the HTTP cache: unchanged files can use HTTP 304.
    const operation = fetch(new Request(request, { cache: 'no-cache' }))
      .then(async response => {
        await store(cacheName, key, response);
        return response;
      }).finally(() => pending.delete(id));
    pending.set(id, operation);
  }
  return pending.get(id).then(response => response.clone());
}

async function precache() {
  const downloads = new Map();
  const download = async path => {
    const url = new URL(path, BASE);
    if (!inScope(url)) return;
    const key = cacheKey(url.href);
    if (downloads.has(key)) return downloads.get(key);
    const task = fetch(new Request(url, { cache: 'reload' })).then(response => {
      if (!response.ok || (response.url && !inScope(new URL(response.url)))) {
        throw new Error(`Cannot cache core resource: ${url.pathname}`);
      }
      return response;
    });
    downloads.set(key, task);
    return task;
  };
  // Discover each core page's real scripts, styles, manifest and icons.
  await Promise.all(CORE_PAGES.map(async page => {
    const response = await download(page);
    const html = await response.clone().text();
    const tags = html.match(/<(?:script|link)\b[^>]*>/gi) || [];
    await Promise.all(tags.map(async tag => {
      const source = /\b(?:src|href)\s*=\s*["']([^"']+)["']/i.exec(tag);
      if (!source) return;
      if (/^<link/i.test(tag) && !/\brel\s*=\s*["'](?:stylesheet|manifest|icon|apple-touch-icon)["']/i.test(tag)) return;
      await download(new URL(source[1], new URL(page, BASE)).href);
    }));
  }));
  await Promise.all(CORE_EXTRAS.map(download));
  // Don't replace the previous cache until all required downloads succeed.
  const cache = await caches.open(APP_CACHE);
  for (const [key, task] of downloads) await cache.put(key, (await task).clone());
}

self.addEventListener('install', event => {
  event.waitUntil(precache());
  // Updated workers wait for open pages to close, preserving unfinished inputs.
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(`${PREFIX}app-v`) && name !== APP_CACHE).map(name => caches.delete(name)));
    // Keep card caches across program upgrades. Never delete unrelated caches.
    await self.clients.claim();
  })());
});

async function offlinePage() {
  const cached = await readCache(APP_CACHE, new URL('offline.html', BASE).href);
  if (cached) {
    const html = (await cached.text()).replace('<head>', `<head><base href="${BASE.href}">`);
    return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }
  return new Response('暂时离线，请联网后重试。', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

async function networkFirst(navigation, cached, network) {
  let timer;
  try {
    // No cached resource: wait for the network rather than timeout to blank JS.
    const response = cached ? await Promise.race([
      network,
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Slow network')), NETWORK_TIMEOUT); })
    ]) : await network;
    if (response.status >= 500 && cached) return cached;
    return response;
  } catch {
    if (cached) return cached;
    if (navigation) return offlinePage();
    return new Response('', { status: 503, statusText: 'Offline resource unavailable' });
  } finally { clearTimeout(timer); }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  const relative = url.pathname.slice(BASE.pathname.length);
  if (request.method !== 'GET' || !inScope(url) || request.headers.has('range')) return;
  if (/^(?:_archive\/|tests\/|docs\/|\.|sw\.js$)/.test(relative)) return;
  const navigation = request.mode === 'navigate';
  const card = relative.startsWith(encodeURI('图片/')) || relative.startsWith('图片/');
  if (!navigation && !card && !/\.(?:js|css|json|png|webp|svg|jpg|jpeg|woff2?)$/i.test(url.pathname)) return;
  const key = cacheKey(request);
  const cacheName = card ? CARD_CACHE : APP_CACHE;
  // Attach the background task synchronously so it survives an early cache hit.
  const network = refresh(request, cacheName, key);
  event.waitUntil(network.catch(() => {}));
  event.respondWith((async () => {
    const cached = await readCache(cacheName, key);
    if (card) {
      if (cached) return cached;
      try { const response = await network; if (response.ok) return response; }
      catch { /* An unseen card is unavailable offline. */ }
      // Return a placeholder without caching it under the missing card's URL.
      return await readCache(APP_CACHE, new URL('offline-card.svg', BASE).href)
        || new Response('', { status: 503 });
    }
    return networkFirst(navigation, cached, network);
  })());
});
