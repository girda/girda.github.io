const staticAssets = [
    './census/index.html',
    './census/css/app.css',
    './census/js/app.js'
]

self.addEventListener('install', async event => {
    const cache = await caches.open('news-static');
    cache.addAll(staticAssets)
    console.log(staticAssets)
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url)
    
    console.log(req)
    if ( url.origin === location.origin ) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    console.log(cachedResponse)
    console.log(fetch(req))
    return cachedResponse || fetch(req)
}