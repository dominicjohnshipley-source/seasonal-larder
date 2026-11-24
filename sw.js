// Seasonal Larder service worker: makes the app work offline once visited.
// It always tries the network first, so any file you upload to GitHub is picked up
// automatically next time the app is opened online. You never need to edit this file.
const CACHE = "larder";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const fonts = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!sameOrigin && !fonts) return;

  // Google Fonts never change, so serve them from the cache when we have them.
  if (fonts) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    })));
    return;
  }

  // The app's own files: fresh from the network (skipping the browser cache), saved for offline,
  // and the saved copy used only when there's no connection.
  e.respondWith(
    fetch(req, { cache: "no-cache" })
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req.mode === "navigate" ? "./" : req, copy)); }
        return res;
      })
      .catch(() => caches.match(req.mode === "navigate" ? "./" : req, { ignoreSearch: true }))
  );
});
