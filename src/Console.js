import React, { useState, useRef, useLayoutEffect } from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";
import Typewriter from "typewriter-effect";
import "./Console.css";

const downloadResume = () => {
  window.open(
    "https://github.com/baraql/baraql.github.io/raw/main/src/assets/baraq_lipshitz_resume.pdf",
    "_blank"
  );
};

function AutofocusingTextInput(props) {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    var cursorFocus = function () {
      var x = document.documentElement.scrollLeft || document.body.scrollLeft;
      var y = document.documentElement.scrollTop || document.body.scrollTop;
      inputRef.current.focus({
        preventScroll: true,
      });
      window.scrollTo(x, y);
    };

    cursorFocus();
  }, []);

  // Get screen width
  const screenWidth = Dimensions.get('window').width;

  // Conditional styles based on screen width
  // const inputBoxStyles = [
  //   styles.consoleInputBox,
  //   screenWidth < 850 && styles.consoleInputBoxSmallScreen,
  // ];

  const inputStyle = {
    outline: 'none',
    color: 'white',
    fontFamily: 'monospace',
    border: 'none',
    outlineColor: 'none',
    padding: 0,
    position: "absolute",
    marginTop: '-10px', 
    // paddingBottom: "3vw",
    marginLeft: '157px',
    fontSize: "27px",
    zIndex: 1,
  }
  
  const inputStyleSmallScreen = {
    fontSize: '16px', // Example of a different style for small screens
    marginLeft: 10, // Adjust as needed for small screens
    marginLeft: '94px',
    marginTop: '-5.5px', 
  };

  const combinedInputStyle = screenWidth < 850 
    ? { ...inputStyle, ...inputStyleSmallScreen }
    : inputStyle;

  return (
    <TextInput
      ref={inputRef}
      id="consoleTextInput"
      style={combinedInputStyle} // Apply conditional styles here
      // style={{color: 'white',
      //   outline: 'none'
      // }}
      caretHidden="true"
      variant="standard"
      placeholder=""
      onChangeText={(text) => {
        props.setInputText(text);
      }}
      onSubmitEditing={(e) => {
        e.preventDefault();
        const formattedInputText = props.inputText.toLowerCase().trim();
        if (props.inputText.includes("resume")) {
          downloadResume();
        } else if (props.inputText.includes("projects")) {
          window.scrollBy(0, window.innerHeight * 1.2 - window.scrollY);
        } else if (props.inputText.includes("experience")) {
          window.scrollBy(0, window.innerHeight * 2.4 - window.scrollY);
        } else {
          for (const path of paths) {
            if (formattedInputText.includes(path)) {
              window.location.href = "/#/" + path;
            }
          }
        }
        props.setInputText("");
        try {
          document.getElementById("consoleTextInput").focus();
        } catch (e) {
          console.error(e);
        }
      }}
      value={props.inputText}
    />
  );
}

const paths = ["resume", "projects", "experience"];

function Console() {
  var [showInput, setShowInput] = useState(false);
  var [inputText, setInputText] = useState("");
  return (
    <div className="codebox-input code-font">
      <div className="flex-row-container header-bar">
        <span className="header-button red"></span>
        <span className="header-button yellow"></span>
        <span className="header-button green"></span>
      </div>
      <div className="typewriter-container">
        <Typewriter
          options={{
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .callFunction(function (state) {
                setShowInput(true);
                state.elements.cursor.style.display = "none";
              })
              .start();
          }}
        />

        {showInput ? (
          <div>
            {inputText === "" ? (
              <div className="overlayedPlaceholder">
                <div className="flex-row-container">
                  <Typewriter
                    options={{
                      strings: paths,
                      autoStart: true,
                      loop: true,
                      cursor: "",
                    }}
                  />
                </div>
              </div>
            ) : null}
            <div className="flex-row-container">
              <div>baraq ~ %</div>
              <AutofocusingTextInput
                inputText={inputText}
                setInputText={setInputText}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Console;
