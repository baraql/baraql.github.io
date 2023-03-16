import React, { useState, useRef, useLayoutEffect } from "react";
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TextInput,

} from "react-native";
import Typewriter from "typewriter-effect";

function AutofocusingTextInput(props) {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        var cursorFocus = function () {
            var x = document.documentElement.scrollLeft || document.body.scrollLeft;
            var y = document.documentElement.scrollTop || document.body.scrollTop;
            inputRef.current.focus({
                preventScroll: true
            });
            window.scrollTo(x, y);
        }

        cursorFocus();
    }, []);

    return (
        <TextInput
            ref={inputRef}
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
            // autoFocus
            variant="standard"
            placeholder=""
            // onKeyDown={handleKeyDown}
            onChangeText={(text) => {
                props.setInputText(text);
            }}
            onSubmitEditing={(e) => {
                e.preventDefault();
                const formattedInputText = props.inputText.toLowerCase().trim();
                console.log("formattedInputText: " + props.inputText + ", paths: " + paths + "inputText in paths: " + props.inputText in paths);
                if (paths.some(path => formattedInputText.includes(path))) {
                    if (props.inputText === 'resume')
                        window.open(
                            'https://github.com/baraql/baraql.github.io/raw/master/src/assets/baraq_lipshitz_resume.pdf', "_blank");
                    else
                        window.location.href = '/#/' + props.inputText;
                }
                props.setInputText("");
                document.getElementById("consoleTextInput").focus();

            }}
            value={props.inputText}
        />
    )
}

const paths = ['projects', 'resume', 'about'];


function Console() { // TODO make it look like a mac terminal window when you start typing, make it scrollable
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
                                    strings: paths,
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
                        <AutofocusingTextInput inputText={inputText} setInputText={setInputText} />
                    </div>
                </div> : null}
            </div>
        </div >
    )
}

export default Console;