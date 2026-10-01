// Run with Node and Playwright available via NODE_PATH (no project build needed).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const scope = '/Magic_U/';
const prefix = `magic-u:${scope}:`;
const overrides = new Map();
const delays = new Map();
const requests = [];
const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' };

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (!url.pathname.startsWith(scope)) { res.writeHead(404).end(); return; }
  let relative;
  try { relative = decodeURIComponent(url.pathname.slice(scope.length)) || 'index.html'; }
  catch { res.writeHead(400).end(); return; }
  const file = path.resolve(root, relative);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
  const body = Buffer.from(overrides.get(relative) ?? fs.readFileSync(file));
  const etag = '"' + crypto.createHash('sha256').update(body).digest('hex') + '"';
  const status = req.headers['if-none-match'] === etag ? 304 : 200;
  requests.push({ relative, status, bytes: status === 304 ? 0 : body.length });
  const respond = () => {
    res.writeHead(status, { 'Content-Type': (mime[path.extname(file)] || 'application/octet-stream') + (['.html', '.js', '.css', '.json'].includes(path.extname(file)) ? '; charset=utf-8' : ''), 'Cache-Control': 'public, max-age=0, must-revalidate', ETag: etag });
    res.end(status === 304 ? undefined : body);
  };
  if (delays.has(relative)) setTimeout(respond, delays.get(relative));
  else respond();
});

async function main() {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}${scope}`;
  let browser;
  try {
    browser = await chromium.launch({ channel: process.env.PWA_BROWSER_CHANNEL || 'msedge', headless: true });
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, serviceWorkers: 'allow' });
    let page = await context.newPage();
    const errors = [];
    const monitor = page => page.on('pageerror', error => errors.push(error.message));
    monitor(page);
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.waitForFunction(() => !!navigator.serviceWorker.controller);
    const info = await page.evaluate(async () => {
      const registration = await navigator.serviceWorker.getRegistration();
      const manifest = await (await fetch('manifest.json')).json();
      const names = await caches.keys();
      const entries = await (await caches.open(`magic-u:${new URL(registration.scope).pathname}:app-v1`)).keys();
      return { scope: registration.scope, manifest, names, entries: entries.map(entry => entry.url) };
    });
    assert.equal(info.scope, base);
    assert.equal(info.manifest.start_url, './index.html');
    assert.equal(info.manifest.id, './index.html');
    assert.equal(info.manifest.display, 'standalone');
    for (const icon of info.manifest.icons) {
      const bytes = fs.readFileSync(path.join(root, icon.src.split('?')[0]));
      assert.equal(`${bytes.readUInt32BE(16)}x${bytes.readUInt32BE(20)}`, icon.sizes);
    }
    assert(!requests.some(request => request.relative.startsWith('图片/')), 'Install must not download the deck');
    assert(info.entries.some(url => url.endsWith('/daily_archive.html')));
    assert(!info.entries.some(url => /\/(?:lesson|boss|spread_practice)\.html/.test(url)));
    console.log(`PASS install: subpath scope, manifest, icons, ${info.entries.length} core resources, zero card downloads`);

    const today = await page.evaluate(() => {
      const d = new Date(), pad = n => String(n).padStart(2, '0');
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    });
    await page.evaluate(date => {
      localStorage.setItem('magic_u_boss_black_cat_completed', JSON.stringify({ completed: true }));
      localStorage.setItem('magic_u_lesson_see_completed', JSON.stringify({ observations: ['old-progress'] }));
      localStorage.setItem('magic_u_daily_records_v1_records', JSON.stringify({ [date]: { date, cardId: 0, orientation: 'upright', mood: 'calm', saved: true, notes: [{ id: 'old-note', text: '原有记录', createdAt: new Date().toISOString() }] } }));
      localStorage.setItem('magic_u_reading_records_v1', JSON.stringify([{ id: 'old-reading', createdAt: new Date().toISOString(), spreadTitle: '原有占卜', question: '', cards: [], answers: [] }]));
      localStorage.setItem('magic_u_spread_practice_records_v1', '[]');
    }, today);
    await page.goto(base + 'daily_card.html', { waitUntil: 'networkidle' });
    await page.locator('#cardImage').evaluate(img => { if (!img.complete || !img.naturalWidth) throw new Error('Card not loaded'); });
    await page.goto(base + 'lesson.html?card=0', { waitUntil: 'networkidle' });
    await page.goto(base + 'boss.html', { waitUntil: 'networkidle' });
    await page.goto(base + 'spread_practice.html', { waitUntil: 'networkidle' });
    // Explicitly load a second image, to check that a later image update retains it.
    await page.evaluate(() => fetch('图片/盒子/维特塔罗/1.webp').then(response => response.arrayBuffer()));
    console.log('PASS online: daily card, lesson, boss and spread dependencies load without JS errors');

    await context.setOffline(true);
    for (const file of ['index.html', 'journey.html', 'handbook.html', 'handbook_daily.html', 'handbook_readings.html', 'handbook_spreads.html', 'daily_card.html', `daily_archive.html?date=${today}`, 'lesson.html?card=1', 'boss.html?stage=2', 'spread_practice.html']) {
      const response = await page.goto(base + file, { waitUntil: 'load' });
      assert.equal(response.status(), 200, file);
      assert(!(await page.title()).includes('暂时离线'), file);
    }
    assert.equal(await page.locator('#spreadList button').count() > 0, true);
    await page.goto(base + 'boss.html?stage=2', { waitUntil: 'load' });
    assert((await page.title()).includes('II'));
    await page.locator('#startBoss').click();
    assert(await page.locator('#bossOptions button').count() > 0);
    await page.goto(base + 'daily_card.html', { waitUntil: 'load' });
    await page.locator('#noteToggle').click();
    await page.locator('#noteInput').fill('离线写入测试');
    await page.locator('#saveDaily').click();
    const notes = await page.evaluate(date => JSON.parse(localStorage.getItem('magic_u_daily_records_v1_records'))[date].notes, today);
    assert(notes.some(note => note.text === '原有记录'));
    assert(notes.some(note => note.text === '离线写入测试'));
    assert(await page.locator('#cardImage').evaluate(img => img.complete && img.naturalWidth > 0));
    await page.goto(base + 'never-visited.html', { waitUntil: 'load' });
    assert((await page.title()).includes('暂时离线'));
    assert.equal(await page.locator('a.primary-action').getAttribute('href'), 'index.html');
    console.log('PASS offline: core pages, visited secondary pages, query parameters, cached image and daily record writes');

    await page.goto(base + 'divination.html', { waitUntil: 'load' });
    await page.locator('#startDraw').click();
    const selectable = async () => page.evaluate(() => Array.from(document.querySelectorAll('.fan-card')).map(card => {
      const rect = card.querySelector('.fan-number').getBoundingClientRect();
      const x = rect.left + rect.width / 2, y = rect.top + rect.height / 2;
      const hit = document.elementFromPoint(x, y)?.closest('.fan-card');
      return { id: card.dataset.id, number: card.querySelector('.fan-number').textContent, center: card.classList.contains('is-center'), selected: card.classList.contains('preselected'), x, y, hit: hit?.dataset.id === card.dataset.id };
    }).filter(card => card.hit));
    for (let i = 0; i < 3; i++) {
      await page.waitForTimeout(250);
      const candidates = await selectable();
      assert(candidates.length >= 2, 'Multiple cards must be independently clickable');
      const choice = candidates.find(card => !card.center) || candidates[0];
      await page.mouse.click(choice.x, choice.y);
      await page.waitForTimeout(250);
      const selected = (await selectable()).find(card => card.id === choice.id && card.selected);
      assert(selected, 'Off-center card is selected');
      assert.equal(selected.number, choice.number);
      await page.mouse.click(selected.x, selected.y);
      await page.waitForTimeout(600);
    }
    await page.locator('#reveal').waitFor({ state: 'visible' });
    for (const card of await page.locator('#revealBoard .reading-card').all()) await card.click();
    await page.locator('#beginInterpret').click();
    for (let i = 0; i < 3; i++) {
      await page.locator('[data-method="reference"]').click();
      await page.locator('#nextInterpret').click();
    }
    await page.locator('#saveReading').click();
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('magic_u_reading_records_v1')).length), 2);
    const imageCacheKeys = await page.evaluate(async name => (await (await caches.open(name)).keys()).map(request => request.url), prefix + 'cards-v1');
    assert.equal(imageCacheKeys.length, 2, 'Offline placeholders must not replace missing cards in cache');
    console.log('PASS offline divination: numbered off-center cards, draw/reveal/interpret/save; unseen images use noncached placeholders');

    const beforeUpdate = await page.evaluate(() => ({ ...localStorage }));
    await context.setOffline(false);
    await page.goto(base + 'index.html', { waitUntil: 'networkidle' });
    const conditionalRequests = requests.filter(request => request.status === 304);
    assert(conditionalRequests.length > 0, 'Repeated requests should use HTTP validators');
    // Publishing a CSS change needs no URL version or SW version change.
    overrides.set('home-unlock.css', fs.readFileSync(path.join(root, 'home-unlock.css'), 'utf8') + '\nbody{--pwa-test-release:2}\n');
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(await page.evaluate(() => getComputedStyle(document.body).getPropertyValue('--pwa-test-release').trim()), '2');
    overrides.set('home-unlock.css', overrides.get('home-unlock.css') + '\nbody{--pwa-test-release:3}\n');
    delays.set('home-unlock.css', 2800);
    await page.reload({ waitUntil: 'load' });
    assert.equal(await page.evaluate(() => getComputedStyle(document.body).getPropertyValue('--pwa-test-release').trim()), '2', 'Slow network must fall back to cached CSS');
    await page.waitForFunction(async name => {
      const cached = await (await caches.open(name)).match(new URL('home-unlock.css', location.href).href);
      return cached && (await cached.text()).includes('--pwa-test-release:3');
    }, prefix + 'app-v1');
    delays.delete('home-unlock.css');
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(await page.evaluate(() => getComputedStyle(document.body).getPropertyValue('--pwa-test-release').trim()), '3');
    console.log('PASS weak network: cached resource after 1.8 seconds, delayed update stored in background');
    const image = '图片/盒子/维特塔罗/0.webp';
    const replacement = fs.readFileSync(path.join(root, '图片/盒子/维特塔罗/2.webp'));
    overrides.set(image, replacement);
    const imageRequestsBefore = requests.filter(request => request.relative.startsWith('图片/')).length;
    await page.evaluate(image => fetch(image).then(response => response.arrayBuffer()), image);
    await page.waitForFunction(async ({ name, image, size }) => {
      const response = await (await caches.open(name)).match(new URL(image, location.href).href);
      return response && (await response.arrayBuffer()).byteLength === size;
    }, { name: prefix + 'cards-v1', image, size: replacement.length });
    assert.equal(requests.filter(request => request.relative.startsWith('图片/')).length - imageRequestsBefore, 1);
    assert.equal((await page.evaluate(async name => (await (await caches.open(name)).keys()).length, prefix + 'cards-v1')), 2);
    console.log(`PASS updates: changed CSS without version bump, ${conditionalRequests.length} HTTP 304 responses, single-image update with other cards retained`);

    // Simulate an actual new worker and ensure its scoped cleanup is safe.
    await page.evaluate(async prefix => {
      await (await caches.open(prefix + 'app-v0')).put('old.html', new Response('old'));
      await (await caches.open('another-project-app-v0')).put('other.html', new Response('other'));
    }, prefix);
    overrides.set('sw.js', fs.readFileSync(path.join(root, 'sw.js'), 'utf8').replace('NETWORK_TIMEOUT = 1800', 'NETWORK_TIMEOUT = 1801'));
    await page.evaluate(async () => (await navigator.serviceWorker.getRegistration()).update());
    await page.waitForFunction(async () => !!(await navigator.serviceWorker.getRegistration()).waiting);
    assert.deepEqual(await page.evaluate(() => ({ ...localStorage })), beforeUpdate);
    await page.close();
    await context.setOffline(true);
    page = await context.newPage();
    monitor(page);
    await page.goto(base + 'index.html', { waitUntil: 'load' });
    await page.waitForFunction(async old => !(await caches.keys()).includes(old), prefix + 'app-v0');
    const after = await page.evaluate(async () => ({ storage: { ...localStorage }, caches: await caches.keys() }));
    assert.deepEqual(after.storage, beforeUpdate);
    assert(after.caches.includes(prefix + 'cards-v1'));
    assert(after.caches.includes('another-project-app-v0'));
    assert.equal(await page.evaluate(() => getComputedStyle(document.body).getPropertyValue('--pwa-test-release').trim()), '3');
    assert.deepEqual(errors, []);
    console.log('PASS worker upgrade: waits for pages to close, retains all records and cards, preserves unrelated caches; zero page JS errors');
    await context.close();
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
