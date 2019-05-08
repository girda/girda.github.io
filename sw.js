const staticAssets = [
    './content.html',
    './js/app.js',
]

self.addEventListener('install', async event => {
    const cache = await caches.open('start');
    cache.addAll(staticAssets)
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url)
    
    if ( url.origin === location.origin ) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req)
}
