(() => {
  if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
  const base = new URL('./', document.currentScript.src);
  let registration;
  let lastCheck = 0;
  async function checkForUpdate() {
    if (!registration || !navigator.onLine || Date.now() - lastCheck < 60000) return;
    lastCheck = Date.now();
    try { await registration.update(); } catch { /* Keep working offline. */ }
  }
  async function register() {
    try {
      registration = await navigator.serviceWorker.register(new URL('sw.js', base).href, {
        scope: base.href,
        updateViaCache: 'none'
      });
      await checkForUpdate();
    } catch (error) { console.warn('Magic_U offline setup failed:', error); }
  }
  if (document.readyState === 'complete') register();
  else window.addEventListener('load', register, { once: true });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') checkForUpdate();
  });
  window.addEventListener('online', checkForUpdate);
  // No forced reload, storage reset or business-data migration during updates.
})();
