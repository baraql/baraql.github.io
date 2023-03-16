/* eslint-disable react/jsx-no-comment-textnodes */
import Draggable from 'react-draggable';
import './App.css';
import React from "react";
import Console from "./Console"
import face from './assets/face.png';
import { Link } from 'react-router-dom';
import './rainbow.css'

function Start() {
    return (
        <div style={{
            width: '100vw', height: '118vh', clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)'
        }} class='rainbowWrapper'>
            <div style={{ position: 'absolute', paddingLeft: '2vw', paddingTop: '3vh', }}>
                <Link to='/' className="logo" style={{ color: 'white', }}> baraq </Link>
            </div>
            <Draggable style={{ position: 'absolute' }} defaultPosition={{ x: window.innerWidth / 5, y: window.innerHeight * 0.30 }}>
                <div className="codebox-input" style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '0.8vw',
                    paddingBottom: '3vw',
                    width: '33vw',
                    // marginRight: '0',
                    height: '18vw',
                    boxShadow: '1vw 1vw 2.5vw #1a1a1a',
                    zIndex: '1',
                    fontSize: '1.2vw',
                    lineHeight: '0.5'
                }}>
                    <div className="flex-row-container" style={{
                        backgroundColor: '#ffffff',
                        minHeight: '1.8vw',
                        borderTopLeftRadius: '0.8vw',
                        borderTopRightRadius: '0.8vw',
                        margin: 'auto',
                    }}>
                        <span style={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginLeft: '0.55vw',
                            height: '0.85vw',
                            width: '0.85vw',
                            backgroundColor: '#FF605C',
                            // backgroundColor: 'rgb(243, 96, 244)',
                            // backgroundColor: '#e85ae8',
                            // backgroundColor: '#d36fd3',
                            borderRadius: '50%',
                            display: 'inline-block',
                        }}></span>
                        <span style={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginLeft: '0.55vw',
                            height: '0.85vw',
                            width: '0.85vw',
                            backgroundColor: '#FFBD44',
                            borderRadius: '50%',
                            display: 'inline-block',
                        }}></span>
                        <span style={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginLeft: '0.55vw',
                            height: '0.85vw',
                            width: '0.85vw',
                            backgroundColor: '#00CA4E',
                            // backgroundColor: 'rgb(118, 228, 222)',
                            // backgroundColor: '#72d6d1',
                            borderRadius: '50%',
                            display: 'inline-block',
                        }}></span>
                    </div>

                    <div style={{ marginLeft: '0.3vw' }}>
                        <p>/*</p>
                        <p>* I'm interested in mobile application</p>
                        <p>* development, fintech,</p>
                        <p>* and artificial intelligence.</p>
                        <p>*/</p>
                        <br></br>
                        <p>><a href="mailto:baraq@nyu.edu" target="_blank" rel="noopener noreferrer">baraq@nyu.edu</a></p>
                        <p>><a href="https://linkedin.com/in/baraq" target="_blank" rel="noopener noreferrer">linkedin.com/in/baraq</a></p>
                        <p>><a href="https://github.com/baraql" target="_blank" rel="noopener noreferrer">github.com/baraql</a></p>
                    </div>
                </div>
            </Draggable>

            <Draggable defaultPosition={{ x: window.innerWidth / 2.3, y: -(window.innerWidth * 0.21) + window.innerHeight * 0.5 }}>
                <div style={{
                    zIndex: '4',
                    // minWidth: '80vmin',
                    // minHeight: '25vmin',
                    // paddingLeft: '5vmin',
                    color: 'white',
                    // left: '10000px'
                    // position: 'absolute'
                }}>
                    <Console />
                </div>
            </Draggable>

            <Draggable style={{ position: 'absolute' }} defaultPosition={{ x: window.innerWidth / 2.3, y: -(window.innerWidth * 0.44) + window.innerHeight * 0.125 }}>
                <img src={face} className="noDragImage" style={{
                    // height: '166.2px',
                    width: '12.5vw',
                    // aspectRatio: '1815/1679',
                    borderRadius: '1.04vw',
                    backgroundColor: '#dedede',
                    // paddingTop: '10px',
                    zIndex: '5',
                    boxShadow: '1vw 1vw 2.5vw #1a1a1a',
                }}
                    alt="Professional headshot of Baraq Lipshitz"
                />
            </Draggable>

        </div >
    );
}

export default Start;