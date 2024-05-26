import React from "react";
import "./RobotVisionBanner.css";
import fitmeLogo from "./assets/fitmeLogo.png";
import demoVideo from "./assets/profileOverlayed.mp4";
import demoVideoPlaceholder from "./assets/profileOverlayedStillCompressed.jpg";
import "./diagonal.css"
import Vimeo from '@u-wave/react-vimeo';
// const appIconSize = 7;

function Home() {
  const [containerHeight, setContainerHeight] = React.useState("60vh"); // You can change this to 40vh, 30vh, etc.

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className="container-horizontal"
      style={{ height: containerHeight, marginTop: "7.5vh" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          className="container-vertical"
          style={{
            // height: appIconSize + "vw",
            // paddingBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p className="text" style={{ fontSize: "64px", marginBlock: 0 }}>
            AI Robot
          </p>
        <a
          className="button"
          href="https://drive.google.com/file/d/18ch9GdXvAAAcynauIHtNebtqqi3pBm-S/view?usp=sharing"
          target="_blank"
          style={{ fontSize: "25px" }}
          onClick={scrollToTop}
        >
          Presentation
        </a>
        <a
          className="button"
          href="https://github.com/baraql/ai-maze-solver"
          target="_blank"
          style={{ fontSize: "25px" }}
          onClick={scrollToTop}
        >
          Code
        </a>
        </div>
        {/* <a
          className="button"
          href="/#/projects/fitme"
          style={{ fontSize: "25px" }}
          onClick={scrollToTop}
        >
          Code
        </a> */}
      </div>
      <div style={{ maxHeight: "50vh", marginLeft: "5vw" }}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/NxhqUqeqWzw?si=AuU-pGm8g_DdjU6A&rel=0" title="AI Robot Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Home;
