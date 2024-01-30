import React from "react";
import "./JobHistory.css";
import "./diagonal.css";
import PayoneerLogo from "./assets/job-history/payoneer.png";
import ForbesLogo from "./assets/job-history/forbes.png";
import NYULogo from "./assets/job-history/nyu.png";

export const JobHistory = () => {
  const jobHistory = [
    {
      company: "High Speed Research Network",
      position: "Team Lead, Software Engineer",
      startDate: "September 2023",
      endDate: "Present",
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
    <div
      className="diagonal-top"
      style={{ backgroundColor: "#ededed", width: "100vw", minHeight: "100vh" }}
    >
      <div
        className="container-vertical"
        style={{
          paddingTop: "15vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 className="h1" style={{ paddingBottom: "40px" }}>
          💼 History
        </h1>
        <div>
          {jobHistory.map((job, index) => (
            <div
              key={index}
              className="container-horizontal"
              style={{
                paddingBottom: "100px",
                alignItems: "start",
                // width: "42.5%",
                justifyContent: "start",
              }}
            >
              <div className="company-logo" style={{ paddingRight: "30px" }}>
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={job.logo}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "10px",
                      border: "1px solid lightGray",
                    }}
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
                  <h2
                    style={{
                      margin: "0",
                      marginBottom: "10px",
                    }}
                  >
                    {job.company}
                  </h2>
                </a>
                <h3 style={{ margin: "0", marginBottom: "5px" }}>
                  {job.position}
                </h3>
                <p
                  className="job-dates"
                  style={{ margin: "0", marginBottom: "5px" }}
                >
                  {job.startDate} - {job.endDate}
                </p>
                <p style={{ margin: "0" }}>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
