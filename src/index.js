import React from "react";
import ReactDOM from "react-dom";
import "./css/Main.css";
import App from "./App";
import * as serviceWorker from "./sw_2";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
