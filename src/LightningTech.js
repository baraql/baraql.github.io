import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import './Projects.css';
import { Link } from 'react-router-dom';
import fitmeLogo from "./assets/fitmeLogo.png";
import { HashRouter, Routes, Route } from "react-router-dom";
import './LightningTechnology.css';
import './Fitme.css';
import Plx from 'react-plx';
import fitmeSC1 from './assets/fitmeSC1.png'
import Typewriter from "typewriter-effect";
import appStoreButton from "./assets/appstorebutton.svg"

function WebsitePreview(props) {
  const handleClick = () => {
    console.log("hi");
    window.open("http://twitter.com/saigowthamr");
  };

  return (
    // <div>
    // <div className="flex-container">
    <div style={{ width: "100vw", height: "100vh", marginRight: '-60vw', marginLeft: '5vw' }}>
      {/* <a href={props.url} target="_blank" rel="noopener noreferrer" style={{ width: "100%", height: "100%" }}> */}
      <iframe style={{ width: "100%", height: "100%", boxShadow: '5px 5px 10px black' }} src={props.url} className="frame" onClick={handleClick}></iframe>
      {/*</a>*/}
    </div>
    // <a href={props.url} target="_blank" rel="noopener noreferrer">Hi</a>
    // </div>
  )
}

function LightningTech() {
  return (
    <>
      <div class="fixed-div" style={{ zIndex: '1', left: '2vw', top: '3vh' }}>
        <Link to='/projects' class="logo"> baraq::projects::websites </Link>
      </div>
      <div style={{ paddingTop: '15vh', textAlign: 'center', fontSize: '25px' }}>
        {/* <Text style={{ textAlign: 'center', fontFamily: 'nunito', width: '100%' }}>Some websites I've made for local businesses.</Text> */}
        Some of the websites I've made for businesses under my general-purpose IT startup, Lightning Tech.
        {/* <Text style={{ fontSize: '60px', marginBottom: '10vh', fontFamily: 'Nunito' }}>Some websites I've built:</Text> */}
        <div class="row-container" style={{
          // marginTop: "50vh",
          // marginRight: "2vw",
          // marginLeft: "2vw",
          // width: '200vw'
          marginTop: '10vh',
          height: '50vh',
          overflowY: 'hidden',
          overflowX: 'hidden',
        }}>
          <WebsitePreview url="https://www.college.kreitzmanconsulting.com/" />
          <WebsitePreview url="https://www.jobs.kreitzmanconsulting.com/" />
        </div>
        <div class="row-container" style={{
          // marginTop: "50vh",
          // marginRight: "2vw",
          // marginLeft: "2vw",
          // width: '200vw'
          height: '50vh',
          overflowY: 'hidden',
          overflowX: 'hidden',
        }}>
          <WebsitePreview url="https://sausysucculents.com" />
          <WebsitePreview url="https://baraqlip.wixsite.com/jocelyn/home" />
        </div>
        <div class="row-container" style={{
          // marginTop: "50vh",
          // marginRight: "2vw",
          // marginLeft: "2vw",
          // width: '200vw'
          height: '50vh',
          overflowY: 'hidden',
          overflowX: 'hidden',
        }}>
          <WebsitePreview url="https://www.matdesigngroup.com/" />
        </div>
      </div >
    </>
  )
}

export default LightningTech;