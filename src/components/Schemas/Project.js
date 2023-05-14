import React from "react";
import './../Styles/Projects.css'
import "../../App.css";

const Project = ({ aos, link, className, title, name, tools }) => {
  return (
    <div data-aos={aos} className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={className}>
          <div className="project-title">
            <a href={link} className="highlight_1">
              {title}
            </a>
          </div>
          <div className="project-name">
            <a href={link}>{name}</a>
          </div>
          <div className="project-tools">
            <a href={link} className="highlight_2">
             Tech: {tools}
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
