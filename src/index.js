(function () {
    if (window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        const div = document.getElementById('name');
        div.textContent = window.Telegram.WebApp.WebAppInitData.user.first_name;
        console.log(window.Telegram.WebApp.WebAppInitData);
    } else {
        console.error("window.Telegram.WebApp not found")
    }
})();
