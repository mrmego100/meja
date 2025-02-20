self.addEventListener("message", function (event) {
    if (event.data === "openSite") {
        setTimeout(() => {
            clients.openWindow("https://yourwebsite.com");
        }, 3000);
    }
});
