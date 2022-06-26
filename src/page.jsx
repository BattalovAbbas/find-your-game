const React = require("react");
const styles = require("./page.css");

function Page(props) {
    if (window.Telegram.WebApp.initDataUnsafe) {
        window.Telegram.WebApp.ready();
        return (
            <div className={styles.container}>
                <h2 style={{color: "#999999"}}>Найди свою игру</h2>
                <h1 id="name" style={{color: "#7a7878"}}>{window.Telegram.WebApp.initDataUnsafe.user.first_name}</h1>
                <button onClick={window.Telegram.WebApp.close} className={styles.button}>Закрыть</button>
            </div>
        );
    } else {
        return <h2 style={{ color: "#999999"}}>Найди свою игру</h2>
    }
     
}

module.exports = Page;