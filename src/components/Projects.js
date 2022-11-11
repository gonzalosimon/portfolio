import React, { Component } from "react";
import "./../App.css";
import "../Responsive.css";
import "../styles/projects.css"
import Project from "./Schemas/Project.js";

class Projects extends Component {
  render() {
    return (
      <div className="body">
        <section>
          <a className="link-reference" href="https://github.com/gb-simon">
            Linkedin
          </a>
          <a className="link-reference" href="https://github.com/gb-simon">
            GitHub
          </a>
            <p className="projects-intro">
              I've been coding for a few years now, worked for single clients and companies, having side projects, studying, training, and still sleeping
          </p>
          <div className="projects">
            <Project
              link="https://socialgallery.netlify.app/"
              aos="fade-up"
              class="project-default"
              name="Galeria is my first social media application"
              title="Social Media w/MERN Stack"
              tools="JavaScript"
              index="12"
            />
            <Project
              link="https://github.com/gb-simon/galleryapp/"
              aos="fade-up"
              class="project-default"
              name="Gallery App Unsplash API"
              title="Gallery App Unsplash API w/React [Infinite Scroll]"
              tools="JavaScript"
              index="11"
            />
            <Project
              link="https://github.com/gb-simon/footballgame/"
              aos="fade-up"
              class="project-default"
              name="Football Game with JavaScript"
              title="Browser video-game"
              tools="JavaScript"
              index="0"
            />{" "}
            <Project
              aos="fade-up"
              link="https://github.com/Marcos-111/crazyPasswords"
              class="project-default"
              name="La Boutique de Marcos"
              title="E-Commerce"
              tools="Angular & TailwindCSS"
              index="1"
            />
            <Project
              aos="fade-up"
              link="https://github.com/gb-simon/url-shortener-microservice"
              class="project-default"
              name="URL Shortener"
              title="URL Shortener Microservice"
              tools="Node & MongoDB"
              index="2"
            />
            <Project
              aos="fade-up"
              link="https://github.com/gb-simon/socialMedia"
              title="Social Media"
              class="project-last"
              name="Twitter Clone"
              tools="MERN Stack"
              index="3"
            />
            <Project
              aos="fade-up"
              link="https://github.com/gb-simon/todoList-using-api-"
              class="project-default"
              title="Tasks App"
              name="To-do App"
              tools="MERN Stack - API"
              index="4"
            />
            <Project
              aos="fade-up"
              link="https://github.com/gb-simon/algorithms-solutions"
              class="project-default"
              title="Algorithms Repository"
              name="+100 Algorithms"
              tools="Mostly JS & Python"
              index="5"
            />
            <Project
              aos="fade-up"
              link="https://github.com/gb-simon/wikipedia-viewer"
              class="project-default"
              title="Wikipedia Viewer"
              name="Wikipedia Finder"
              tools="React & Redux"
              index="6"
            />
            <Project
              aos="fade-up"
              link="https://github.com/gb-simon/cities-slider"
              title="Cities Slider"
              class="project-last"
              name="Argentine Cities Slider"
              tools="React"
              index="8"
            />
            <Project
              aos="fade-up"
              link="https://github.com/gb-simon/jsc-graphic "
              title="Social Media"
              class="project-last"
              name="Average Life Expectancy"
              tools="JS Charting"
              index="9"
            />
            <Project
              aos="fade-up"
              link="https://github.com/gb-simon/treemap-diagram"
              title="Movies Treemap Diagram"
              class="project-last"
              name=" Treemap-diagram"
              tools="D3"
              index="10"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
