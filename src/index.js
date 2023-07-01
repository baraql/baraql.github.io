import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Projects from "./Projects";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

if (vw > vh) {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter basename="/">
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/projects/*" element={<Projects />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <p>
        Sorry, but I'm not optimized for mobile yet! Please use this website in
        landscape mode.
      </p>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
