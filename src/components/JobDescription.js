import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { clientsList } from "./Lists.js";
import "./Styles/JobDescription.css";

const JobDescription = () => {
  const { job } = useParams();
  const history = useHistory();

  const jobData = clientsList.find((client) => {
    const formattedClientName = client.client.toLowerCase();
    const formattedJobName = decodeURIComponent(job).toLowerCase();
    return formattedClientName === formattedJobName;
  });

  if (!jobData) {
    return (
      <div className="job-description">
        <p>Job not found</p>
      </div>
    );
  }

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="job-description">
      <button onClick={handleGoBack} className="button-back">
        Go Back
      </button>

      <h1 className="job-title">{jobData.client}</h1>

      <div className="job-meta">
        <h2 className="job-position">{jobData.position}</h2>

        <p className="job-date">{jobData.date}</p>
      </div>

      <ul className="job-skills">
        {jobData.skills.split(" · ").map((skill) => (
          <li className="job-skill">{skill}</li>
        ))}
      </ul>

      <p className="job-description-text">{jobData.description}</p>

      <p className="job-tools">{jobData.tools}</p>
    </div>
  );
};

export default JobDescription;
