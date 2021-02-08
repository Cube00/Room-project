import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./reset.css";
import "./app.css";
import { Context } from "./context";

ReactDOM.render(
  <Context>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context>,
  document.getElementById("root")
);
