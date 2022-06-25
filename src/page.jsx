const React = require("react");
  
function Page(props) {
    if (window.Telegram.WebApp.initDataUnsafe) {
        window.Telegram.WebApp.ready();
        const name = document.getElementById('name');
        return (
            <>
                <h2 style={{color: "#999999"}}>Найди свою игру</h2>
                <h1 id="name" style={{color: "#7a7878"}}>{name}</h1>
            </>
        );
    } else {
        return <h2 style={{ color: "#999999"}}>Найди свою игру</h2>
    }
     
}

module.exports = Page;