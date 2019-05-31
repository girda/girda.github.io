const staticAssets = [
    './index.html',
    './css/app.css',
    './js/app.js',
    './js/lib/eusw.js',
    './js/lib/euswll.js',
]

self.addEventListener('install', async event => {
    const cache = await caches.open('news-static');
    cache.addAll(staticAssets)
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url)
    console.log(req)
    console.log(url)
    console.log(location)
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