import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/about.css";
import "./styles/info.css";
import "./styles/interests.css";
import "./styles/links.css";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Links from "./Links";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Info />
    <About />
    <Interests />
    <Links />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
