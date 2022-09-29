import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Projects from './Projects';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    {/* <AnimatePresence> */}
    <HashRouter basename="/">
      {/* <Navigation /> */}
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/*" element={<Projects />} />
      </Routes>
    </HashRouter>
    {/* </AnimatePresence> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
