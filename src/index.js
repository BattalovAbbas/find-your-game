(function () {
    if (window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        console.log(window.Telegram.WebApp.WebAppInitData);
    } else {
        console.error("window.Telegram.WebApp not found")
    }
})();
