import Start from "./Start";
import FitmeBanner from "./FitmeBanner";
import "./Home.css";
import usePageTracking from "./usePageTracking";
import { JobHistory } from "./JobHistory";
import "./diagonal.css"
import RobotVisionBanner from "./RobotVisionBanner"
import "./fadeInUp.css"
let BANNER_SIZE = 60;

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
      <div style={{ height: BANNER_SIZE * 1 + 100 + "vh", width: "100vw" }}>
        <div style={{ width: "100vw", height: "100vh" }}>
          <Start />
        </div>
        <div 
          style={{
            position: "static",
            height: BANNER_SIZE + "vh",
            width: "100vw",
            borderBottom: "2px solid #ddd"
          }}
        >
          <RobotVisionBanner  />
        </div>
      </div>
      <div
          style={{
            position: "static",
            height: BANNER_SIZE + "vh",
            width: "100vw",
          }}
        >
          <FitmeBanner />
        </div>
      <JobHistory />
    </div>
  );
}

export default Home;
