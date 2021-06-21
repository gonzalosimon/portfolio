import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Responsive.css";
import "../Hamburgers.css";
import Project from "./Project.js";

class Projects extends Component {
  state = {
    hamburgerState: "off",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger");
    let overlay = document.querySelector(".overlay");
    if (this.state.hamburgerState === "off") {
      hamburger.classList.add("is-active");
      overlay.classList.remove("hide");
      overlay.classList.add("show");
      this.setState({ hamburgerState: "on" });
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({ hamburgerState: "off" });
    }
  };

  render() {
    return (
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="simon">
              <Link to="/" className="active">
                Gonzalo
              </Link>
            </div>
            <button
              className="hamburger hamburger--spin mobile"
              type="button"
              onClick={this.toggleMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="sub-menus">
                <div className="main-mobile">
                  <Link to="/">Home</Link>
                </div>
                <div className="work-mobile">
                  <Link to="/projects" className="active">
                    Work
                  </Link>
                </div>
                <div className="articles-mobile">
                  <Link to="/articles">Articles</Link>
                </div>
                <div className="about-mobile">
                  <Link to="/about">About</Link>
                </div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="main">
                <Link to="/">Home</Link>
              </div>
              <div className="work">
                <Link to="/projects" className="active">
                  Work
                </Link>
              </div>
              <div className="articles">
                <Link to="/articles">Articles</Link>
              </div>
              <div className="about">
                <Link to="/about">About</Link>
              </div>
            </div>
          </div>
          <div className="designer">JavaScript Developer</div>
          <div className="speciality">MERN Stack</div>
        </section>

        <section>
          <p className="projects-intro">
            I've been coding for a few years, I have more than 50 projects that
            you can check on my{" "}
            <a className="link-reference" href="https://github.com/gb-simon">
              GitHub account
            </a>.
          </p>
          <div className="projects">
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
