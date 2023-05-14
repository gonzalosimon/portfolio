import React from "react";
import "../../App.css";
import "../../Responsive.css";

const Client = ({ title, link, description, tools, class: className }) => {
  return (
    <div className="project">
      <div className={className}>
        <div className="project-title">
          <a href={link} className="highlight_1">
            {title}
          </a>
        </div>
        <div className="project-tools">
          <a href={link}>{description}</a>
        </div>
        <div className="project-tools">
          <a href={link} className="highlight_2">
            {tools}
          </a>
        </div>

        <div className="project-tools">
          <a href={link} className="highlight_2">
            {description}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Client;
