import React from "react";
import Project from "./Schemas/Project.js";
import { projectsList } from "./Lists";
import "./../App.css";
import './Styles/Projects.css'

const Projects = () => {
  return (
    <div className="body">
      <section className="element-animation"> 
        <h1>Projects</h1>
        <p className="projects-intro">
          I've been coding for a few years, I have more than 50 projects that
          you can check on my{" "}
          <a className="github-reference" href="https://github.com/gonzalosimon">
            GitHub account
          </a>
          .
        </p>
        <div className="projects">
          {projectsList.map((project) => (
            <Project
              link={project.link}
              name={project.name}
              title={project.title}
              tools={project.tools}
              index={project.index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
