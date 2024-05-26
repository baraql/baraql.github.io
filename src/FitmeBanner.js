import React from "react";
import "./FitmeBanner.css";
import fitmeLogo from "./assets/fitmeLogo.png";
import demoVideo from "./assets/profileOverlayed.mp4";
import demoVideoPlaceholder from "./assets/profileOverlayedStillCompressed.jpg";
import "./diagonal.css"
const appIconSize = 7;

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
          className="container-horizontal"
          style={{
            height: appIconSize + "vw",
            paddingBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={fitmeLogo}
            style={{
              borderRadius: appIconSize * 0.2166 + "vw",
              marginRight: "5px",
              height: "100%",
            }}
            alt="Fitme logo"
          />
          <p className="text" style={{ fontSize: "64px" }}>
            Fitme
          </p>
        </div>
        <a
          className="button"
          href="/#/projects/fitme"
          style={{ fontSize: "25px" }}
          onClick={scrollToTop}
        >
          See the project
        </a>
      </div>
      <div style={{ maxHeight: "50vh", marginLeft: "3vw" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ maxHeight: "50vh", marginLeft: "3vw" }}
          poster={demoVideoPlaceholder}
        >
          <source src={demoVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;
