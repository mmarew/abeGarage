import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./assets/NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <NavigationBar />
    <App />
  </Router>
);
