import React, { Component } from 'react';
import '../App.css';
import '../Responsive.css';

class Project extends Component {

  render() {
    return (
      <div data-aos={this.props.aos} className="project">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div className={this.props.class}>
            <div className="project-image">
              <img src={this.props.image} className="project-image-size" alt="Project Thumbnail"/>
            </div>
            <div className="project-title">
              {this.props.title}
            </div>
            <div className="project-category">
              {this.props.category}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Project;
