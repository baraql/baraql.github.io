import React, { useState, useRef, useLayoutEffect } from "react";
import { TextInput } from "react-native";
import Typewriter from "typewriter-effect";

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

  return (
    <TextInput
      ref={inputRef}
      id="consoleTextInput"
      style={{
        fontFamily: "monospace",
        color: "white",
        border: "none",
        outline: "none",
        padding: 0,
        position: "absolute",
        marginTop: "-10px",
        // paddingBottom: "3vw",
        marginLeft: "157px",
        fontSize: "27px",
        zIndex: "1",
      }}
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
        }
        else if (props.inputText.includes("experience")) {
          window.scrollBy(0, window.innerHeight * 2.4 - window.scrollY);
        }
        else {
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
    <div
      className="codebox-input code-font"
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "14px",
        paddingBottom: "51px",
        width: "599px",
        height: "342px",
        boxShadow: "17px 17px 43px #1a1a1a",
        zIndex: "1",
        lineHeight: "0.5",
      }}
    >
      <div
        className="flex-row-container"
        style={{
          backgroundColor: "#403434",
          minHeight: "31px",
          borderTopLeftRadius: "14px",
          borderTopRightRadius: "14px",
          margin: "auto",
        }}
      >
        <span
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "9px",
            height: "15px",
            width: "15px",
            backgroundColor: "#FF605C",
            borderRadius: "50%",
            display: "inline-block",
          }}
        ></span>
        <span
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "9px",
            height: "15px",
            width: "15px",
            backgroundColor: "#FFBD44",
            borderRadius: "50%",
            display: "inline-block",
          }}
        ></span>
        <span
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "9px",
            height: "15px",
            width: "15px",
            backgroundColor: "#00CA4E",
            borderRadius: "50%",
            display: "inline-block",
          }}
        ></span>
      </div>
      <div
        style={{
          paddingTop: "26px",
          paddingLeft: "14px",
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            /* cursor: "▊", */
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

        {/* TODO custom block cursor */}
        {showInput ? (
          <div
            style={{
              // paddingTop: "0.8vw",
            }}
          >
            {inputText === "" ? (
              <div
                className="overlayedPlaceholder"
                style={{
                  // paddingTop: "0.70vw",
                  paddingLeft: "157px",
                }}
              >
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
              <div
                style={{
                  // paddingTop: "0.75vw",
                }}
              >
                baraq ~ %
              </div>
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
