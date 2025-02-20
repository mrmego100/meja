self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("✅ Service Worker Activated!");
});

self.addEventListener("push", (event) => {
    const options = {
        body: "اضغط هنا لفتح التطبيق!",
        icon: "/icon.png",
        badge: "/icon.png",
        vibrate: [200, 100, 200],
        data: { url: "/" }
    };

    event.waitUntil(
        self.registration.showNotification("🔔 إشعار جديد!", options)
    );
});

self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});

// تشغيل الإشعارات تلقائياً كل 10 ثوانٍ
setInterval(() => {
    self.registration.showNotification("🔔 إشعار جديد!", {
        body: "اضغط هنا لفتح التطبيق!",
        icon: "/icon.png",
        badge: "/icon.png",
        vibrate: [200, 100, 200],
        data: { url: "/"
        }
    });
}, 10000);
