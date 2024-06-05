import Start from "./Start";
import FitmeBanner from "./FitmeBanner";
import { JobHistory } from "./JobHistory";
import RobotVisionBanner from "./RobotVisionBanner"
import SpotifyML from "./Projects"
import usePageTracking from "./usePageTracking";
import "./Home.css";
import "./diagonal.css"
import "./fadeInUp.css"
import Projects from "./Projects";

let BANNER_SIZE = 50;

function Home() {
  usePageTracking();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* <div style={{ height: BANNER_SIZE * 2 + 100 + "vh", width: "100vw" }}> */}
      <div style={{ width: "100vw", height: "118vh" }}>
        <Start />
      </div>
      <div>
        <Projects />
        {/* <div
          style={{
            position: "static",
            height: BANNER_SIZE + "vh",
            width: "100vw",
            borderBottom: "2px solid #ddd"
          }}
        >
          <SpotifyML />
        </div>
        <div
          style={{
            position: "static",
            height: BANNER_SIZE + "vh",
            width: "100vw",
            borderBottom: "2px solid #ddd"
          }}
        >
          <RobotVisionBanner />
        </div>

        <div
          style={{
            position: "static",
            height: BANNER_SIZE + "vh",
            width: "100vw",
          }}
        >
          <FitmeBanner />
        </div> */}
      </div>
      <JobHistory />
    </div >
  );
}

export default Home;
