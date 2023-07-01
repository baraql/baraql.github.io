import React from "react";
import "./JobHistory.css";
import "./diagonal.css";
import PayoneerLogo from "./assets/job-history/payoneer.png";
import ForbesLogo from "./assets/job-history/forbes.png";

export const JobHistory = () => {
  const jobHistory = [
    {
      company: "Forbes Media",
      position: "Technology Intern",
      startDate: "June 2023",
      endDate: "August 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: ForbesLogo,
      link: "https://forbes.com",
    },
    {
      company: "Payoneer",
      position: "Software Engineer Intern",
      startDate: "June 2022",
      endDate: "September 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: PayoneerLogo,
      link: "https://payoneer.com",
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
        <h1 className="h1" style={{ width: "80%", paddingBottom: "40px" }}>
          Work History
        </h1>
        {jobHistory.map((job, index) => (
          <div
            key={index}
            className="job-container container-horizontal"
            style={{ paddingBottom: "100px" }}
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
  );
};
