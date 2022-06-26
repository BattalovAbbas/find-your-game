const ReactDOM = require("react-dom/client");
const React = require("react");
const Page = require("./page.jsx");
  
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(<Page />);