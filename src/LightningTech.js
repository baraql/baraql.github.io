import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import "./LightningTechnology.css";
import "./Fitme.css";
import usePageTracking from "./usePageTracking";

function WebsitePreview(props) {
  const handleClick = () => {
    console.log("hi");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        marginRight: "-60vw",
        marginLeft: "5vw",
      }}
    >
      <iframe
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "5px 5px 10px black",
        }}
        src={props.url}
        className="frame"
        title={props.url}
        onClick={handleClick}
      ></iframe>
    </div>
  );
}

function LightningTech() {
  usePageTracking();

  return (
    <>
      <div className="fixed-div logoWrapper" style={{ zIndex: "1" }}>
        <Link to="/projects" className="logo">
          {" "}
          baraq::projects::websites{" "}
        </Link>
      </div>
      <div
        style={{ paddingTop: "15vh", textAlign: "center", fontSize: "25px" }}
      >
        Some of the websites I've made for businesses under my general-purpose
        IT startup, Lightning Tech.
        <div
          className="row-container"
          style={{
            marginTop: "10vh",
            height: "50vh",
            overflowY: "hidden",
            overflowX: "hidden",
          }}
        >
          <WebsitePreview url="https://www.college.kreitzmanconsulting.com/" />
          <WebsitePreview url="https://www.jobs.kreitzmanconsulting.com/" />
        </div>
        <div
          className="row-container"
          style={{
            height: "50vh",
            overflowY: "hidden",
            overflowX: "hidden",
          }}
        >
          <WebsitePreview url="https://www.steelefiduciary.com/" />
          <WebsitePreview url="https://baraqlip.wixsite.com/jocelyn/home" />
        </div>
      </div>
    </>
  );
}

export default LightningTech;
