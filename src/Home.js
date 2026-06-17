import Start from "./Start";
import { JobHistory } from "./JobHistory";
import usePageTracking from "./usePageTracking";
import "./Home.css";
import "./diagonal.css";
import "./fadeInUp.css";
import Projects from "./Projects";

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
      <div className="hero-section">
        <Start />
      </div>
      <main className="main-content">
        <Projects />
      </main>
      <JobHistory />
    </div>
  );
}

export default Home;
