/* eslint-disable react/jsx-no-comment-textnodes */
import Draggable from "react-draggable";
import "./Start.css";
import React from "react";
import Console from "./Console";
import face from "./assets/face.png";
import { Link } from "react-router-dom";
import "./rainbow.css";
import TextEdit from "./TextEdit";
function Start() {
  return (
    <div className="rainbowWrapper diagonal-bottom">
      <div className="logoWrapper">
        <Link to="/" style={{ color: "white" }} className="logo">
          {" "}
          baraq{" "}
        </Link>
      </div>
      <Draggable
      // style={{ position: "absolute" }}
      // defaultPosition={{
      //   x: window.innerWidth / 5,
      //   y: window.innerHeight * 0.3,
      // }}
      >
        <div className="textedit-draggable-child">
          <TextEdit />
        </div>
      </Draggable>

      <Draggable
      // defaultPosition={{
      //   x: window.innerWidth / 2.3,
      //   y: -(window.innerWidth * 0.21) + window.innerHeight * 0.5,
      // }}
      >
        <div className="console-wrapper console-draggable-child">
          <Console />
        </div>
      </Draggable>

      <Draggable
      // defaultPosition={{
      //   x: window.innerWidth / 2.3,
      //   y: -(window.innerWidth * 0.44) + window.innerHeight * 0.125,
      // }}
      >
        <div className="face-wrapper">
          <img
            src={face}
            className="no-drag-image face-image"
            alt="Professional headshot of Baraq Lipshitz"
          />
        </div>
      </Draggable>
    </div>
  );
}

export default Start;
