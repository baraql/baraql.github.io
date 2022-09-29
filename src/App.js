//CONVERT ALL VW TO PERCENTS
//POSITION ELEMENTS WITH INITIAL DRAG STATE
import Draggable, { DraggableCore } from 'react-draggable';
import './App.css';
import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import Typewriter from "typewriter-effect";
import face from './assets/face.png';
import { Link } from 'react-router-dom';
import backgroundVideo from "./assets/background.gif";
// import backgroundImage from './assets/backgroundposter.png';
// import YouTube from 'react-youtube';

var app = document.getElementById('app');

// TODO add shower
// TODO detect click anywhere on window and select textinput
function Console(props) { // TODO make it look like a mac terminal window when you start typing, make it scrollable
  var [showInput, setShowInput] = useState(false);
  var [inputText, setInputText] = useState("");
  return (
    <div className="codebox-input" style={{
      backgroundColor: '#1e1e1e',
      borderRadius: '0.8vw',
      paddingBottom: '3vw',
      width: '35vw',
      // marginRight: '0',
      height: '20vw',
      boxShadow: '1vw 1vw 2.5vw #1a1a1a',
      zIndex: '1',
      lineHeight: '0.5'
    }}>
      <div className="flex-row-container" style={{
        backgroundColor: '#403434',
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
          // backgroundColor: '#72d6d1',
          // backgroundColor: '#81c7c3',
          borderRadius: '50%',
          display: 'inline-block',
        }}></span>
      </div>
      <div style={{
        paddingTop: '1.5vw',
        paddingLeft: '0.8vw',
      }}>
        <Typewriter
          options={
            {
              autoStart: true,
              /* cursor: "▊", */
            }
          }
          onInit={
            (typewriter) => {
              typewriter
                .changeDelay(1)
                .pasteString(">")
                .changeDelay(50)
                .typeString("Hello, world!")
                .pauseFor(300)

                .changeDelay(1)
                .pasteString("<p>")
                .pasteString(">")
                .changeDelay(50)
                .typeString("I'm Baraq Lipshitz,")

                .changeDelay(1)
                .typeString("<p>")
                .pasteString(">")
                .changeDelay(50)
                .typeString("a CS student at NYU.")
                .pauseFor(500)
                .callFunction(function (state) {
                  setShowInput(true);
                  state.elements.cursor.style.display = 'none';
                })
                .start();
            }
          }
        />

        {/* TODO custom block cursor */}
        {showInput ? <div style={{
          paddingTop: '0.8vw'
        }}>
          {inputText == "" ? <div className="overlayedPlaceholder" style={{
            paddingTop: '0.70vw',
            paddingLeft: '0.97vw',
          }}>
            <div className="flex-row-container">
              {/* <Text>    </Text> */} {/* // TODO make unselectable */}
              <Typewriter /* className="noselect"  onmousedown="return false" onselectstart="return false"*/
                options={{
                  /* strings: ['resume', 'projects', 'about', 'contact', 'help', 'game'],*/
                  strings: ['projects', 'resume', 'about'],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              /* onselectstart={(e) => {
                console.log('selected!')
              }
              } */
              />
            </div>
          </div> : null}
          <div className="flex-row-container">
            <div style={{
              paddingTop: '0.75vw'
            }}>
        >
            </div>
            <TextInput
              id="consoleTextInput"
              style={{
                fontFamily: 'monospace',
                color: "white",
                border: 'none',
                outline: 'none',
                padding: 0,
                position: 'absolute',
                marginTop: '0.175vw',
                marginLeft: '0.97vw',
                // top: '1%',
                fontSize: '1.6vw',
                zIndex: '1',
              }}
              caretHidden="true"
              autoFocus
              variant="standard"
              placeholder=""
              // onKeyDown={handleKeyDown}
              onChangeText={(text) => {
                setInputText(text);
              }}
              /*             onKeyPress={event => {
                            // if (event.key === 'Backspace') {
                            //   setInputText(inputText.substring(0, inputText.length - 1));
                            //   return;
                            // }
                            // if (event.key === 'Enter') {
                            //   console.log('hi');
                            //   return;
                            // }
              
                          }} */
              /* onSubmit={(e) => {
                console.log('submitted');
                e.preventDefault();
                setInputText("");
              }} */
              onSubmitEditing={(e) => {
                e.preventDefault();
                console.log('submitted');

                if (inputText == "about")
                  window.location.href = '/#/about';
                else if (inputText == "resume")
                  window.open(
                    'http://baraql.github.io/static/media/baraq_lipshitz_resume.311e62799860d3afe51e.pdf', "_blank");

                else if (inputText == "projects")
                  window.location.href = '/#/projects';

                setInputText("");
                document.getElementById("consoleTextInput").focus();

              }}
              value={inputText}
            />
          </div>
        </div> : null}
      </div>
    </div >
  )
}

//Floating animations hovering up and down
function App() {
  return (
    <div style={{ overflow: 'hidden', height: '100vh', width: '100vw', backgroundColor: 'black' }}>
      {/* <video autoPlay loop muted id="bgVideo" style={{ zIndex: '0', opacity: '0.5' }}>
        <source src={backgroundVideo} type='video/mp4' />
      </video> */}
      <img src={backgroundVideo} id="bgVideo" style={{ zIndex: '0', opacity: '0.5' }} />
      {/* <Background /> */}

      <div style={{ height: '100vh', width: '100vw', color: 'black', position: 'absolute' }}></div>
      {/* This is the background */}
      {/* <div style={{ position: 'absolute', width: '100vw', height: '100vh', zIndex: '-1' }}> */}


      {/* This is the logo */}
      <div style={{ position: 'absolute', paddingLeft: '5px', paddingLeft: '2vw', paddingTop: '3vh', }}>
        <Link to='/' className="logo" style={{ color: 'white', }}> baraq </Link>
      </div>

      {/* This is the face */}
      {/* <div className="center-screen">, style={{ position: 'absolute' }} */}
      {/* <div > */}
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
          paddingTop: '10px',
          zIndex: '5'
        }}
        />
      </Draggable>

      {/* </div> */}

      {/* This is the console */}
      {/* <div style> */}

      {/* </div> */}

      {/* <div style={{ color: 'black', opacity: '1', zIndex: '10', height: '100vh', width: '100vw' }}></div> */}
    </div >
  );
}

export default App;