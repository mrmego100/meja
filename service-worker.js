self.addEventListener("install", event => {
    console.log("✅ Service Worker تم التثبيت!");
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    console.log("🚀 Service Worker مفعل!");
});

self.addEventListener("push", event => {
    self.registration.showNotification("🔔 إشعار مستمر!", {
        body: "📢 هذا إشعار يتم إرساله حتى بعد مغادرة الموقع!",
        icon: "https://via.placeholder.com/100"
    });
});

// إرسال إشعارات تلقائية كل 30 ثانية
setInterval(() => {
    self.registration.showNotification("🔔 إشعار تلقائي!", {
        body: "📢 لازلت تتلقى الإشعارات حتى لو أغلقت المتصفح!",
        icon: "https://via.placeholder.com/100"
    });
}, 30000);
