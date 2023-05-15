import React from "react";
import "./../Styles/Projects.css";
import "../../App.css";

const Project = ({ link, title, name, tools }) => {
  return (
    <div data-aos={"fade-right"} className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="project-title">
          <p className="highlight_1">{title}</p>
        </div>
        <div className="project-name">
          <p>{name}</p>
        </div>
        <div className="project-tools">
          <p className="highlight_2">Tech: {tools}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
