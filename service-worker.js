self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    clients.claim();
});

// ✅ دالة إرسال الإشعارات كل 10 ثوانٍ
function sendNotification() {
    self.registration.showNotification("🔔 إشعار جديد", {
        body: "انقر هنا لفتح التطبيق!",
        icon: "icon.png",
        tag: "notification-loop"
    });

    setTimeout(sendNotification, 10000); // كل 10 ثوانٍ
}

// ✅ تشغيل الإشعارات تلقائيًا عند تفعيل الـ Service Worker
self.addEventListener("activate", event => {
    event.waitUntil(
        new Promise(resolve => {
            sendNotification();
            resolve();
        })
    );
});
