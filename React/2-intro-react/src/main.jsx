import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp
      title="Hello World!"
      user={{ name: "Pepe", lastName: "Doe" }}
      id={1}
    />
  </React.StrictMode>
);
