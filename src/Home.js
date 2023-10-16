import Start from "./Start";
import Links from "./Links";
import FitmeBanner from "./FitmeBanner";
import "./Home.css";
import usePageTracking from "./usePageTracking";
import { JobHistory } from "./JobHistory";

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
      <div style={{ height: "230vh", width: "100vw" }}>
        <div style={{ width: "100vw", height: "100vh" }}>
          <Start />
        </div>
        <div>
          <Links />
        </div>
        <div
          style={{
            position: "static",
            height: "66.67vh",
            width: "100vw",
          }}
        >
          <FitmeBanner />
        </div>
      </div>
      <JobHistory />
    </div>
  );
}

export default Home;
