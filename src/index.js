(function () {
    if (window.Telegram.WebApp.initDataUnsafe) {
        window.Telegram.WebApp.ready();
        const name = document.getElementById('name');
        const photo = document.getElementById('photo');
        name.textContent = window.Telegram.WebApp.initDataUnsafe.user.first_name;
        console.log(window.Telegram.WebApp.initDataUnsafe);
    } else {
        console.error("Telegram not found")
    }
})();
