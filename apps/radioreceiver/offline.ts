const VERSION = "v1";
const CACHE_NAME = `radioreceiver-${VERSION}`;
const APP_STATIC_RESOURCES = [
  "./",
  "index.html",
  "main.js",
  "favicon.png",
  "help.html",
  "help.js",
  "manifest.json",
];

let we = self as unknown as ServiceWorkerGlobalScope;

async function precache() {
  const cache = await we.caches.open(CACHE_NAME);
  cache.addAll(APP_STATIC_RESOURCES);
}

async function refreshCache() {
  const names = await we.caches.keys();
  await Promise.all(
    names.map((name) => {
      if (name !== CACHE_NAME) {
        return we.caches.delete(name);
      }
    })
  );
  await we.clients.claim();
}

async function networkFirst(request: Request) {
  let fromNet = fetch(request);
  let cached = await we.caches.match(request);

  try {
    let response = await fromNet;
    if (response.ok && cached) {
      const cache = await we.caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return cached || Response.error();
  }
}

we.addEventListener("install", (e: ExtendableEvent) => {
  e.waitUntil(precache());
});

we.addEventListener("activate", (e: ExtendableEvent) => {
  e.waitUntil(refreshCache());
});

we.addEventListener("fetch", (e: FetchEvent) => {
  e.respondWith(networkFirst(e.request));
});
