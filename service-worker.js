self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('blog-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/icon-192x192.png',
                '/icon-512x512.png'
            ]);
        })
    );
    console.log('Service Worker Installed');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
