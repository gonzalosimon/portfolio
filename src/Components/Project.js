import React, { Component } from "react";
import "../App.css";
import "../Responsive.css";

class Project extends Component {
  render() {
    return (
      <div data-aos={this.props.aos} className="project">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div className={this.props.class}>
            <div className="project-title">
              <a href={this.props.link} className="highlight_1">
                {this.props.title}
              </a>
            </div>
            <div className="project-tools">
              <a href={this.props.link}>{this.props.name}</a>
            </div>
            <div className="project-tools">
              <a href={this.props.link} className="highlight_2">
                {this.props.tools}
              </a>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Project;
