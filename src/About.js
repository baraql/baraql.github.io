import React from "react";
import { Text } from "react-native";
import './About.css';
import resumePDF from './assets/baraq_lipshitz_resume.pdf'
import { Link } from 'react-router-dom'
import tkd1 from './assets/tkd1.jpg';
import tkd2 from './assets/tkd2.jpeg';
import hackathon1 from './assets/hackathon1.png';
// background-image: url("./assets/tkd1.png");

<link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Poppins"></link>

function AboutArray(props) {
    return (
        <div class="flex-row-container" style={{ maxWidth: "70vw", }}>
            <Text style={{ fontSize: "2vw", fontFamily: "monospace", minWidth: "20vw", }}>
                {props.variableName} =
            </Text>
            <Text style={{ fontSize: "2vw", fontFamily: "monospace", textAlign: "left", }}> {props.elements};</Text>
        </div>
    )
}

function Article(props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginTop: '2vw',
            marginLeft: '2vw',
        }}>
            <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ maxWidth: '15vw', }} class="article" >
                <img src={props.img} style={{
                    display: 'block',
                    height: 'auto',
                    width: 'auto',
                    maxHeight: '15vw',
                    maxWidth: '15vw',
                    // aspectRatio: '1815/1679',
                    borderRadius: '4px',
                    pointerEvents: 'none',
                    // marginLeft: '25vmin',
                }} />
                <Text style={{ textDecoration: 'none', textDecorationLine: "none", fontSize: "0.8vw", }} >{props.publication} | {props.date} {props.special != null ? "|" : ""} {props.special}<br /></Text>
                <Text style={{ fontSize: "1.1vw", lineHeight: "0.5vw" }}>
                    {props.title}
                </Text>

            </a >
            {/* <svg width="24px" height="24px" viewBox="0 0 24 24"><g stroke-width="2.1" stroke="#F9C3A1" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline><path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path></g></svg> */}
        </div >
    )
}

// TODO Add interactive/interesting/animated background
function About() {

    return (
        <div className="about">

            <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", marginTop: "3vh", zIndex: '2' }}>
                <div class="fixed-div" style={{ zIndex: '1', left: '2vw', }}>
                    <Link to='/' class="logo"> baraq::about </Link>
                </div>

                <div class="fixed-div" style={{ marginLeft: '10vw', top: '20vh', height: "30%", flexGrow: "1", textSize: "2vw", zIndex: '2' }} >
                    <AboutArray variableName="languages" elements="[C++, Python, Swift, Javascript, Java, SwiftUI]" />
                    <br />
                    <br />
                    <AboutArray variableName="real_languages" elements="[(english, fluent), (hebrew, fluent)]" />
                    <br />
                    <br />
                    <AboutArray variableName="attributes" elements="[CPR Certified, Wrestling, Scuba Certified, Sailing, Skiing, Drumming]" />
                    {/* <Text style={{ fontSize: "2vw", fontFamily: "monospace", }} ><br />NYU.addStudent(&baraq, "Computer Science");</Text> */}
                </div>

                <div class="fixed-div">
                    <div style={{ position: 'fixed', top: '80vh', marginLeft: '10vw', zIndex: '2', }} >
                        <a href={resumePDF} target="_blank" rel='noopener noreferrer' style={{
                            fontSize: "2.5vw",
                        }} >
                            Download Resume
                        </a>
                    </div>
                </div>


            </div>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: '80vw', marginBottom: "2vw", }}>
                <Text style={{ fontSize: "2vw", textAlign: "center", marginRight: '1vw', }} >
                    In the News
                </Text>
                <Article img={tkd1}
                    title="Taekwondo a family affair for brothers with black belts"
                    publication="The Ark"
                    date="20 June, 2018"
                    link="http://cnpa.com/cja2018/print/2018_California_Journalism_Awards___Print_Division/General/19_Sports_Feature_Story_(WD)/Fourth_Place_The_Ark_4/Attachment_01.pdf"
                    special="(California Journalism Award)"
                    specialLink="https://cnpa.com/cja/2018print/"
                />
                <Article img={tkd2}
                    title="Tiburon teens earn third-degree black belts in taekwondo"
                    publication="The Ark"
                    date="14 June, 2017"
                    link="https://medium.com/the-ark-newspaper/tiburon-teens-earn-third-degree-black-belts-in-taekwondo-b5ddf0ce8a48"
                // special="(California Journalism Award)"
                // specialLink="https://cnpa.com/cja/2018print/"
                />
                <Article img={hackathon1}
                    title="Students Hack Their Way to Health Solutions"
                    publication="County of Marin"
                    date="03 April, 2017"
                    link="https://www.marincounty.org/main/county-press-releases/press-releases/2017/ist-hackathonfollowup-040317"
                // special="(California Journalism Award)"
                // specialLink="https://cnpa.com/cja/2018print/"
                />
            </div>
            {/* <div class="fixed-div" style={{ bottom: '-70vh', }}>
                
            </div> */}
        </div >
    );
}

export default About;