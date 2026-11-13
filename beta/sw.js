// Cueloft service worker
// Opens instantly from the copy saved on the device, then checks GitHub for
// updates in the background (with a timeout), so a slow or blocked network
// can never stop the app from opening. New versions show on the next open.
const CACHE = "cueloft-v10";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png"];
const TIMEOUT_MS = 8000;

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});

function fetchWithTimeout(req) {
  return Promise.race([
    fetch(req),
    new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), TIMEOUT_MS))
  ]);
}

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    let hit = await cache.match(e.request, { ignoreSearch: true });
    if (!hit && e.request.mode === "navigate") hit = (await cache.match("./")) || (await cache.match("./index.html"));
    const update = fetchWithTimeout(e.request)
      .then((res) => { if (res && res.ok) cache.put(e.request, res.clone()); return res; })
      .catch(() => null);
    if (hit) { e.waitUntil(update); return hit; }
    const res = await update;
    return res || new Response("Cueloft is offline and hasn’t been saved on this device yet.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  })());
});
