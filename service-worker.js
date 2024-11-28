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

// عند تفعيل الـ service worker
self.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
});

// استقبال إشعارات Push
self.addEventListener('push', function(event) {
    // تأكد من وجود بيانات للإشعار
    const notificationData = event.data ? event.data.text() : 'You have a new notification!';
    
    const options = {
        body: notificationData,
        icon: 'https://cdn3.iconfinder.com/data/icons/shinysocialball/512/Facebook_512x512.png',
        badge: 'https://www.i2clipart.com/cliparts/9/4/e/c/clipart-home-icon-512x512-94ec.png',
        actions: [
            {
                action: 'open',
                title: 'Open App',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/B_icon_512x512.jpg'
            }
        ]
    };

    // عرض الإشعار للمستخدم
    event.waitUntil(
        self.registration.showNotification('New Notification', options)
    );
});

// التعامل مع نقر المستخدم على الإشعار
self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // إغلاق الإشعار عند النقر عليه

    // فتح التطبيق عند النقر على الإشعار
    event.waitUntil(
        clients.openWindow('https://www.megafrp.com/') // قم بتغيير الرابط إلى رابط تطبيقك
    );
});

// التعامل مع الإشعارات في وضع عدم الاتصال (Offline)
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
