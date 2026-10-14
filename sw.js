// Guarda la app en el móvil para que funcione aunque no haya conexión. No guarda respuestas del test.
const CACHE = "atrevete-v11";
const FILES = ["/", "/index.html", "/manifest.webmanifest", "/icon.svg", "/icon-192.png", "/fonts/archivo.woff", "/fonts/publicsans.woff"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(m => m || caches.match("/index.html"))));
});
