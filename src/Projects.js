import React, { useState } from "react";
import { Text } from "react-native";
import "./Projects.css";
import { Link } from "react-router-dom";
import fitmeLogo from "./assets/fitmeLogo.png";
import lightningLogo from "./assets/lightning.png";
import fTrainIcon from "./assets/fTrainIcon.png";
import { Routes, Route } from "react-router-dom";
import Fitme from "./Fitme";
import LightningTech from "./LightningTech";
import usePageTracking from "./usePageTracking";
function AppItem(props) {
  const [down, setDown] = useState(false);

  function handleDown(e) {
    e.preventDefault();
    setDown(true);
    console.log(down);
  }
  function handleUp(e) {
    e.preventDefault();
    setDown(false);
    console.log(down);
    if (props.link != null) {
      window.open(props.link, "_blank");
    } else {
      window.location.href = "/#/projects/" + props.projectName; // Make 404 page?
    }
  }

  return (
    <a
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      style={{ textAlign: "center", cursor: "pointer" }}
    >
      <div
        style={{
          width: "9vw",
          contentAlign: "center",
        }}
      >
        <img
          src={props.image}
          alt={props.text}
          style={
            down
              ? {
                  filter: "brightness(80%) grayscale(20%)",
                  width: "6vw",
                  height: "6vw",
                  borderRadius: "1.3vw",
                  marginLeft: "1.5vw",
                  marginRight: "1.5vw",
                  marginBottom: "0.5vw",
                  marginTop: "1.5vw",
                }
              : {
                  filter: "brightness(100%) grayscale(0%)",
                  width: "6vw",
                  height: "6vw",
                  marginLeft: "1.5vw",
                  marginRight: "1.5vw",
                  borderRadius: "1.3vw",
                  marginTop: "1.5vw",
                  marginBottom: "0.5vw",
                }
          }
        />
      </div>
      <div style={{ width: "6vw", marginLeft: "1.5vw" }}>
        <Text
          style={{
            color: "white",
            fontSize: "1.5vw",
            textAlign: "center",
            width: "6vw",
            inlineSize: "6vw",
            whiteSpace: "normal",
            overflow: "wrap",
            overflowWrap: "normal",
          }}
        >
          {props.text}
        </Text>
      </div>
    </a>
  );
}

function CarouselSpace(props) {
  return <div style={{ width: props.width }}></div>;
}

function ProjectMenu() {
  return (
    <div
      className="projects"
      style={{
        overscrollBehaviorY: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          zIndex: "2",
        }}
      >
        <div className="fixed-div logoWrapper" style={{ zIndex: "1" }}>
          <Link to="/" className="logo">
            {" "}
            baraq::projects{" "}
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "96vh",
          minWidth: "100vw",
        }}
      >
        <div
          style={{
            backgroundColor: "#78787870",
            backdropFilter: "blur(5px)",
            width: "30vw",
            height: "34vw",
            borderRadius: "4vw",
            marginTop: "3vh",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              flexWrap: "nowrap",
              display: "flex",
              paddingTop: "1.5vw",
            }}
          >
            <CarouselSpace width="1.5vw" />
            <AppItem image={fitmeLogo} text="Fitme" projectName="fitme" />
            <AppItem
              image={lightningLogo}
              text="Lightning Tech"
              projectName="lightningtech"
            />
            <AppItem
              image={fTrainIcon}
              text="NYC At A Glance"
              link="https://github.com/baraql/NYCAtAGlance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  usePageTracking();

  return (
    <>
      <Routes>
        <Route path="/" element={<ProjectMenu />} />
        <Route path="/fitme" element={<Fitme />} />
        <Route path="/lightningtech" element={<LightningTech />} />
      </Routes>
    </>
  );
}

export default Projects;
