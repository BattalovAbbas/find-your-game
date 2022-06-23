(function () {
    if (window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        const name = document.getElementById('name');
        const photo = document.getElementById('photo');
        name.textContent = window.Telegram.WebApp.initDataUnsafe.user.first_name;
        console.log(window.Telegram.WebApp.initDataUnsafe);
    } else {
        console.error("window.Telegram.WebApp not found")
    }
})();
