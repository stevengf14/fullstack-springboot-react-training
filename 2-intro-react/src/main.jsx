import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "./components/HelloWorld";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorld
      title="Hello World!"
      user={{ name: "Pepe", lastName: "Doe" }}
      id={1}
    />
  </React.StrictMode>
);
