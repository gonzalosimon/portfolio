import React, { Component } from "react";
import "../App.css";
import "../Responsive.css";

class Project extends Component {
  render() {
    return (
      <div data-aos={this.props.aos} className="project">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div className={this.props.class}>
            <div className="project-title">{this.props.title}</div>
            <div className="project-tools">{this.props.name}</div>
            <div className="project-tools">{this.props.tools}</div>
          </div>
        </a>
      </div>
    );
  }
}

export default Project;
