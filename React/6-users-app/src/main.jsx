import React from "react";
import ReactDOM from "react-dom/client";
import { UsersApp } from "./UsersApp";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersApp />
    </BrowserRouter>
  </React.StrictMode>
);
