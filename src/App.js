//CONVERT ALL VW TO PERCENTS
//POSITION ELEMENTS WITH INITIAL DRAG STATE
import './App.css';
import React, { useState, useEffect } from "react";
import firebaseConfig from './firebase.js';
import Start from "./Start";
import Home from './Home';

// initializeAnalytics();
// import './rainbow.css'
const app = firebaseConfig.app;
const analytics = firebaseConfig.analytics;

// import backgroundImage from './assets/backgroundposter.png';
// import YouTube from 'react-youtube';

// var app = document.getElementById('app');

// TODO add shower
// TODO detect click anywhere on window and select textinput


//Floating animations hovering up and down
function App() {

  return (
    <Home />
  );
}



export default App;