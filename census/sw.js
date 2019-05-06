const staticAssets = [
    './index.html',
    './css/app.css',
    './js/app.js',
]

self.addEventListener('install', async event => {
    const cache = await caches.open('news-static');
    cache.addAll(staticAssets)
    console.log(staticAssets)
});
console.log('sw-test')
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