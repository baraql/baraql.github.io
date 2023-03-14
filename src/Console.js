import React, { useState, useEffect } from "react";
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TextInput,
} from "react-native";
import Typewriter from "typewriter-effect";

function Console(props) { // TODO make it look like a mac terminal window when you start typing, make it scrollable
    var [showInput, setShowInput] = useState(false);
    var [inputText, setInputText] = useState("");
    return (
        <div className="codebox-input" style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '0.8vw',
            paddingBottom: '3vw',
            width: '35vw',
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
                                    window.location.href = '/about';
                                else if (inputText == "resume")
                                    window.open(
                                        'https://github.com/baraql/baraql.github.io/raw/master/src/assets/baraq_lipshitz_resume.pdf', "_blank");

                                else if (inputText == "projects")
                                    window.location.href = '/projects';

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

export default Console;