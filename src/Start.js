import Draggable from "react-draggable";
import "./Start.css";
import { useState, useEffect, useRef } from "react";
import Console from "./Console";
import face from "./assets/face.png";
import { Link } from "react-router-dom";
import "./rainbow.css";
import TextEdit from "./TextEdit";

// TODO: ARRANGE DRAGGABLES WITH AND TRANSFORMS
function Start() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const textEditRef = useRef(null);
  const consoleRef = useRef(null);
  const faceRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="rainbowWrapper diagonal-bottom">
      <div className="logoWrapper">
        <Link to="/" style={{ color: "white" }} className="logo">
          {" "}
          baraq{" "}
        </Link>
      </div>
      <div className="center-wrapper">
        <Draggable nodeRef={textEditRef}>
          <div ref={textEditRef} className="textedit-draggable-child">
            <TextEdit />
          </div>
        </Draggable>

        {windowWidth >= 850 && (
          <Draggable nodeRef={consoleRef}>
            <div
              ref={consoleRef}
              className="console-wrapper console-draggable-child"
            >
              <Console />
            </div>
          </Draggable>
        )}

        <Draggable nodeRef={faceRef}>
          <div ref={faceRef} className="face-wrapper">
            <img
              src={face}
              className="no-drag-image face-image"
              alt="Professional headshot of Baraq Lipshitz"
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default Start;
