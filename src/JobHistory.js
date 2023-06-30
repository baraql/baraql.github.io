import React from "react";
import "./JobHistory.css";
import "./diagonal.css";
export const JobHistory = () => {
  const jobHistory = [
    {
      company: "Company A",
      position: "Software Engineer",
      startDate: "2019-01-01",
      endDate: "2021-12-31",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      company: "Company B",
      position: "Senior Developer",
      startDate: "2022-01-01",
      endDate: "2023-06-30",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more job history objects as needed
  ];

  return (
    <div
      className="diagonal-top"
      style={{ backgroundColor: "#ededed", width: "100vw", height: "100vh" }}
    >
      <div style={{ padding: "40px", paddingTop: "20vh" }}>
        <h1 className="h1">Job History</h1>
        {jobHistory.map((job, index) => (
          <div key={index}>
            {/* <h2>{job.company}</h2>
            <h3>{job.position}</h3>
            <p>
              {job.startDate} - {job.endDate}
            </p>
            <p>{job.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
