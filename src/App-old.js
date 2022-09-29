import './App.css';
import React, {
  useState
} from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import Typewriter from "typewriter-effect";
// import Particles from 'react-tsparticles';
// import configParticles from './config/configParticles.js';
// import styled from "styled-components"
// import { motion } from "framer-motion"
// import resumePDF from './assets/baraq-lipshitz_resume.pdf'
import face from './assets/face.png';
import { Link } from 'react-router-dom';
//import backgroundVideo from "./assets/background.mp4";
import backgroundImage from './assets/background.gif';

var app = document.getElementById('app');

// TODO add shower
// TODO detect click anywhere on window and select textinput
function Console(props) { // TODO make it look like a mac terminal window when you start typing, make it scrollable
  var [showInput, setShowInput] = useState(false);
  var [inputText, setInputText] = useState("");
  return (
    <div class="codebox-input" style={{
      backgroundColor: '#1e1e1e',
      borderRadius: '10px',
      paddingBottom: '3vw',
      maxWidth: '30vw',
      height: '11vw',
      boxShadow: '1vw 1vw 2.5vw #1a1a1a',
      zIndex: '1',
    }}>
      <div class="flex-row-container" style={{
        backgroundColor: '#403434',
        minHeight: '1.8vw',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        margin: 'auto',
      }}>
        <span style={{
          marginTop: 'auto',
          marginBottom: 'auto',
          marginLeft: '0.55vw',
          height: '0.85vw',
          width: '0.85vw',
          backgroundColor: '#FF605C',
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
          borderRadius: '50%',
          display: 'inline-block',
        }}></span>
      </div>
      <div style={{
        paddingTop: '2.5vw',
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
          {inputText == "" ? <div class="overlayedPlaceholder" style={{
            paddingTop: '0.70vw',
            paddingLeft: '0.97vw',
          }}>
            <div class="flex-row-container">
              {/* <Text>    </Text> */} {/* // TODO make unselectable */}
              <Typewriter /* class="noselect"  onmousedown="return false" onselectstart="return false"*/
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
          <div class="flex-row-container">
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
                    'http://baraql.github.io/static/media/baraq-lipshitz_resume.9e5413c69d963b044d45.pdf', "_blank");

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
    <SafeAreaView>
      {/* <motion.div exit={{ opacity: 0 }}> */}
      <body className="App-body" style={{
        margin: 0,
        padding: 0,
        border: 0,
        /* backgroundColor: '#002D04' */
        /* backgroundImage: 'linear-gradient(#0c0ca8 0%, #02025E 100%)', */
        /* backgroundColor: '#652060',
        backgroundImage: "url(" + frontPageBackground + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' */
      }}>
        <div style={{ position: 'absolute', width: '100vw', zIndex: '-1' }}>
          {/* <video autoPlay loop muted poster={backgroundImage} style={{ width: '100vw' }}>
            <source src={backgroundVideo} type='video/mp4' />
          </video> */}
        </div>
        <section>
          <div class="fixed-div" style={{ zIndex: '5', left: '2vw', top: '3vh', height: '48px', paddingTop: '20px', }}>
            <div stxyle={{ top: '3vh' }}>
              <Link to='/' class="logo" style={{
                color: 'white',
              }}> baraq </Link>
            </div>
          </div>
          <div class="center-screen">
            <div class="flex-column-container">
              <div class="flex-row-container">
                <img src={face} style={{
                  height: '13.85vw',
                  width: '15vw',
                  aspectRatio: '1815/1679',
                  borderRadius: '15px',
                  pointerEvents: 'none',
                  marginLeft: '25vmin',
                  backgroundColor: '#c3c3c3',
                  paddingTop: '10px',
                  // paddingBottom: '0px',
                }}
                />

                <div style={{
                  minWidth: '80vmin',
                  minHeight: '25vmin',
                  paddingLeft: '5vmin',
                }}>
                  <Console />
                </div>
              </div>
              <div style={{
                paddingLeft: '25vmin',
                fontSize: '1.2vw',
                paddingTop: '1.8vw',
              }}>
                /*<p></p>
                * I'm interested in mobile application<p></p>
                * development, fintech,<p></p>
                * and artificial intelligence.<p></p>
                */
                <p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  ><a href="mailto:baraq@nyu.edu" target="_blank" rel="noopener noreferrer">baraq@nyu.edu</a>
                  <p></p>
                  ><a href="https://linkedin.com/in/baraq" target="_blank" rel="noopener noreferrer">linkedin.com/in/baraq</a>
                  <p></p>
                ><a href="https://github.com/baraql" target="_blank" rel="noopener noreferrer">github.com/baraql</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </body>
      {/* </motion.div> */}
    </SafeAreaView >
  );
}

export default App;