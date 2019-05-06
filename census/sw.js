const staticAssets = [
    'girda.github.io/page.html',
    'girda.github.io/css/app.css',
    'girda.github.io/js/app.js',
]

self.addEventListener('install', async event => {
    const cache = await caches.open('news-static');
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