import React, { useEffect, useState } from "react";
import "./Projects.css";
import SpotifyMLVis from "./assets/spotifyMLVis.png";
import Vimeo from "@u-wave/react-vimeo";
import demoVideo from "./assets/profileOverlayed.mp4";
import demoVideoPlaceholder from "./assets/profileOverlayedStillCompressed.jpg";
import fitmeLogo from "./assets/fitmeLogo.png";
import diagnosyAvatar from "./assets/diagnosy-avatar-speaking.png";

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
    description: "Won first place in an NYU AI competition out of 50.",
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
          style={{ width: '100%', height: '100%', border: 'none', margin: 0, padding: 0 }}
        ></iframe>
      </div>
    ),
  },
  {
    title: "Diagnosy",
    description: "AI chatbot for home diagnosis and medical advice.",
    buttons: [
      // {
      //   text: "Slideshow",
      //   href: "https://drive.google.com/file/d/1npgPcY0j-IJ5vEYi-eu4uFSqrCohgzDp/view?usp=sharing",
      // },
      {
        text: "Github",
        href: "https://github.com/nacho-bolanos/Diagnosy/tree/main",
      },
    ],
    media: <img src={diagnosyAvatar} alt="Diagnosy Avatar" className="diagnosy-image"/>,
  },
  {
    title: "Fitme",
    description: "Mobile ecommerce and social media platform.",
    buttons: [],
    media: null,
    icon: fitmeLogo,
  },
];

function Projects() {
  const [isFitmeVideoLoaded, setIsFitmeVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFitmeVideoLoaded(true);
    }, 0); // Delay can be adjusted if necessary

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="projects-container">
      {projects.map((item, index) => (
        <div key={index} className="project">
          <div className="project-content">
            <div className="text-container">
              {item.icon && (
                <div
                  className="container-horizontal fitme-wrapper"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <img
                    src={item.icon}
                    className="icon"
                    alt={`${item.title} logo`}
                  />
                  <p className="title" style={{ fontSize: "48px" }}>
                    {item.title}
                  </p>
                </div>
              )}
              {!item.icon && <p className="title">{item.title}</p>}
              <p className="subtitle">{item.description}</p>
              {item.buttons.length > 0 && (
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
              )}
            </div>
            <div className="media-container">
              {item.media}
              {item.title === "Fitme" && isFitmeVideoLoaded && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ maxHeight: "400px", marginRight: "100px", marginLeft: "100px" }}
                  poster={demoVideoPlaceholder}
                >
                  <source src={demoVideo} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
          {index < projects.length - 1 && <div className="divider"></div>}
        </div>
      ))}
    </div>
  );
}

export default Projects;
