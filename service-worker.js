self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('blog-cache').then(cache => {
            return cache.addAll([
                'https://www.megafrp.com/',
                'https://www.megafrp.com/index.html',
                'https://assets.berty.tech/files/favicon_berty--android-chrome-192x192_hu825b5c7b003d952812a2935e86ca290e_6997_192x0_resize_box_2.png',
                'https://icons.veryicon.com/png/Application/Hand%20Draw%20iPhone/Photos%20512x512.png'
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
