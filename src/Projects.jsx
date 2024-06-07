import React from "react";
import "./Projects.css";
import SpotifyMLVis from "./assets/spotifyMLVis.png";
import Vimeo from "@u-wave/react-vimeo";
import demoVideo from "./assets/profileOverlayed.mp4";
import demoVideoPlaceholder from "./assets/profileOverlayedStillCompressed.jpg";
import fitmeLogo from "./assets/fitmeLogo.png";
import diagnosyAvatar from "./assets/diagnosy-avatar-speaking.png";

const appIconSize = 5.5;
const projects = [
  {
    title: "Song Classification",
    description: "A machine learning model to predict genres.",
    buttons: [
      {
        text: "Medium Article",
        href: "https://medium.com/@baraq/classifying-song-genres-with-machine-learning-37258250504a",
      },
    ],
    media: <img src={SpotifyMLVis} alt="Spotify Visualization" style={{ width: '100%', height: 'auto' }} />,
  },
  {
    title: "AI Robot",
    description: "Visual Place Recognition and obstacle mapping with monocular depth estimation. First-place NYU competition winner out of 50.",
    buttons: [
      {
        text: "Presentation",
        href: "https://drive.google.com/file/d/18ch9GdXvAAAcynauIHtNebtqqi3pBm-S/view?usp=sharing",
      },
      {
        text: "Code",
        href: "https://github.com/baraql/ai-maze-solver",
      },
    ],
    media: (
      <div className="vimeo-wrapper">
      <iframe
        src="https://player.vimeo.com/video/950581264?autoplay=1&muted=1&loop=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video"
        style={{ width: '100%', height: '100%', border: 'none', margin: 0, padding: 0, }}
      ></iframe>
    </div>    
    ),
  },
  // {
  //   title: "Diagnosy",
  //   description: "A chatbot for home diagnosis and medical advice.",
  //   buttons: [
  //     {
  //       text: "Slideshow",
  //       href: "https://drive.google.com/file/d/1npgPcY0j-IJ5vEYi-eu4uFSqrCohgzDp/view?usp=sharing",
  //     },
  //     {
  //       text: "Code",
  //       href: "https://github.com/nacho-bolanos/Diagnosy/tree/main",
  //     },
  //   ],
  //   media: <img src={diagnosyAvatar} alt="Diagnosy Avatar" style={{ height: "250px", margin: "100px" }} />,
  // },
  // {
  //   title: "Fitme",
  //   description: "Mobile ecommerce platform and social media.",
  //   buttons: [
  //     {
  //       text: "See the project",
  //       href: "/#/projects/fitme",
  //     },
  //   ],
  //   media: (
  //     <video
  //       autoPlay
  //       loop
  //       muted
  //       playsInline
  //       style={{ maxHeight: "400px", marginRight: "100px", marginLeft: "100px" }}
  //       poster={demoVideoPlaceholder}
  //     >
  //       <source src={demoVideo} type="video/mp4" />
  //     </video>
  //   ),
  //   icon: fitmeLogo,
  // },
];

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((item, index) => (
        <div key={index} className="project">
          <div className="project-content">
            <div className="text-container">
              {item.icon && (
                <div
                  className="container-horizontal"
                  style={{
                    height: "95px",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                    justifyContent: "flex-start",
                  }}
                >
                  <img
                    src={item.icon}
                    style={{
                      borderRadius: "20.5px",
                      marginRight: "5px",
                      height: "100%",
                    }}
                    alt={`${item.title} logo`}
                  />
                  <p className="title" style={{ fontSize: "48px" }}>
                    {item.title}
                  </p>
                </div>
              )}
              {!item.icon && <p className="title">{item.title}</p>}
              <p className="subtitle">{item.description}</p>
              <div className="buttons-container">
                {item.buttons.map((button, btnIndex) => (
                  <a
                    key={btnIndex}
                    className="button"
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="media-container">{item.media}</div>
          </div>
          {index < projects.length - 1 && <div className="divider"></div>}
        </div>
      ))}
    </div>
  );
}

export default Projects;
