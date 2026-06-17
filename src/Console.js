import { useState, useRef, useLayoutEffect } from "react";
import Typewriter from "typewriter-effect";
import resumePdf from "./assets/baraq_lipshitz_resume.pdf";
import "./Console.css";

const downloadResume = () => {
  window.open(resumePdf, "_blank", "noopener,noreferrer");
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
    <input
      ref={inputRef}
      id="consoleTextInput"
      className="console-input"
      placeholder=""
      onChange={(event) => {
        props.setInputText(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key !== "Enter") {
          return;
        }

        event.preventDefault();
        const formattedInputText = props.inputText.toLowerCase().trim();
        if (formattedInputText.includes("resume")) {
          downloadResume();
        } else if (formattedInputText.includes("projects")) {
          window.scrollBy(0, window.innerHeight * 1.2 - window.scrollY);
        } else if (formattedInputText.includes("experience")) {
          window.scrollBy(0, window.innerHeight * 3.1 - window.scrollY);
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
        } catch (error) {
          console.error(error);
        }
      }}
      value={props.inputText}
    />
  );
}

const paths = ["resume", "projects", "experience"];

function Console() {
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
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
          <div className="console-prompt">
            <span className="console-label">baraq ~ %</span>
            <span className="console-input-wrap">
              {inputText === "" ? (
                <span className="overlayedPlaceholder">
                  <Typewriter
                    options={{
                      strings: paths,
                      autoStart: true,
                      loop: true,
                      cursor: "",
                    }}
                  />
                </span>
              ) : null}
              <AutofocusingTextInput
                inputText={inputText}
                setInputText={setInputText}
              />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Console;
