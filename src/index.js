import React from "react";
import ReactDOM from "react-dom";
import "./css/Main.css";
import App from "./App";
import * as serviceWorker from "./service-worker.js";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
