import React from "react";
import "./JobHistory.css";
import "./diagonal.css";
import PayoneerLogo from "./assets/job-history/payoneer.png";
import ForbesLogo from "./assets/job-history/forbes.png";
import NYULogo from "./assets/job-history/nyu.png";
import stealth from "./assets/job-history/stealth.jpeg";
import eth from "./assets/job-history/eth.png";

export const JobHistory = () => {
  const jobHistory = [
    {
      company: "ETH Zürich",
      position: "MSc. CS, Machine Intelligence",
      startDate: "September 2024",
      endDate: "May 2026",
      description: "Machine Learning",
      logo: eth,
      link: "https://www.nyu.edu/life/information-technology/research-computing-services/research-data-and-tools/high-speed-research-network-hsrn.html",
    },
    {
      company: "Stealth",
      position: "Machine Learning Engineer, Investment Platform",
      startDate: "May 2024",
      endDate: "Present",
      description: "Machine Learning, LLMs",
      logo: stealth,
      link: "https://www.nyu.edu/life/information-technology/research-computing-services/research-data-and-tools/high-speed-research-network-hsrn.html",
    },
    {
      company: "High Speed Research Network",
      position: "Team Lead, Software Engineer",
      startDate: "September 2023",
      endDate: "May 2024",
      description: "C++, Network engineering",
      logo: NYULogo,
      link: "https://www.nyu.edu/life/information-technology/research-computing-services/research-data-and-tools/high-speed-research-network-hsrn.html",
    },
    {
      company: "Forbes Media",
      position: "Technology Intern",
      startDate: "June 2023",
      endDate: "August 2023",
      description: "Google Cloud Platform, Next.js, Node.js, React.js, Argo",
      logo: ForbesLogo,
      link: "https://forbes.com",
    },
    {
      company: "Payoneer",
      position: "Software Engineer Intern",
      startDate: "June 2022",
      endDate: "September 2022",
      description: ".NET, C#, MSSQL, Dynatrace, Coralogix, k6, Azure DevOps",
      logo: PayoneerLogo,
      link: "https://payoneer.com",
    },
    {
      company: "NYU",
      position: "Computer Science Student",
      startDate: "September 2021",
      endDate: "May 2024",
      description: "C++, Python, Haskell, x86 Assembly, MIPS Assembly, Forth",
      logo: NYULogo,
      link: "https://nyu.edu",
    },
  ];

  return (
    <div className="diagonal-top">
      <div className="experience-inner-background">
      <div className="container-vertical">
        <h1 className="h1">
          Experience
        </h1>
        <div>
          {jobHistory.map((job, index) => (
            <div
              key={index}
              className="container-horizontal"
            >
              <div className="company-logo">
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={job.logo}
                    alt={job.company + " logo"}
                  />
                </a>
              </div>
              <div className="job-details">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h3>
                    {job.company}
                  </h3>
                </a>
                <h4>
                  {job.position}
                </h4>
                <p className="job-dates">
                  {job.startDate} - {job.endDate}
                </p>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};
