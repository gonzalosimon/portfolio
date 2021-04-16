import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/projects.css";
import "../Responsive.css";
import "../Hamburgers.css";
import Project from "./Project.js";
import projectone from "../assets/project-tn-01.png";
import projecttwo from "../assets/project-tn-02.png";
import projectthree from "../assets/project-tn-03.png";
import projectfour from "../assets/project-tn-04.png";
import projectfive from "../assets/project-tn-05.png";

class Projects extends Component {
  state = {
    projectOneImage: projectone,
    projectTwoImage: projecttwo,
    projectThreeImage: projectthree,
    projectFourImage: projectfour,
    projectFiveImage: projectfive,
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
        <section className="projects">
          {window.innerWidth <= 1009 ? (
            <div className="left">
              <p className="projects-intro">
                {" "}
                I'm a software developer from Argentina.
                <br />
                I've been a developer for a few years now. I've coded{" "}
                <span className="bold">more than 50 projects</span> that you can
                check on my{" "}
                <a
                  className="link-reference"
                  href="https://github.com/gb-simon"
                >
                  GitHub account.{" "}
                </a>
              </p>{" "}
              <Project
                aos="fade-up"
                link="https://github.com/gb-simon/wikipedia-viewer"
                image={this.state.projectThreeImage}
                class="project-default"
                title="Wikipedia Viewer"
                category="PC / Mobile Web"
                index="0"
              />
              <Project
                link="https://github.com/gb-simon/footballgame/"
                aos="fade-up"
                image={this.state.projectOneImage}
                class="project-default"
                title="Football Game with JavaScript"
                category="Browser video-game"
                index="1"
              />
            </div>
          ) : (
            <div className="left">
              <p className="projects-intro">
                {" "}
                I'm a software developer from Argentina.
                <br />
                I've been a developer for a few years now. I've coded{" "}
                <span className="bold">more than 50 projects</span> that you can
                check on my{" "}
                <a
                  className="link-reference"
                  href="https://github.com/gb-simon"
                >
                  GitHub account.
                </a>
              </p>
              <Project
                link="https://github.com/gb-simon/footballgame/"
                aos="fade-up"
                image={this.state.projectOneImage}
                class="project-default"
                title="Football Game with JavaScript"
                category="Browser video-game"
                index="1"
              />{" "}
              <Project
                aos="fade-up"
                link="https://github.com/gb-simon/password-generator"
                image={this.state.projectTwoImage}
                class="project-default"
                title="Password Generator"
                category="PC Application"
                index="2"
              />
            </div>
          )}
          {window.innerWidth <= 1009 ? (
            <div className="right">
              <Project
                aos="fade-up"
                link="https://github.com/gb-simon/socialMedia/"
                image={this.state.projectFourImage}
                color="rgba(233, 111, 94, 0.95)"
                title="socialMedia - Twitter Clone"
                class="project-last"
                category="PC / Mobile Web"
                index="3"
              />
              <Project
                aos="fade-up"
                link="https://github.com/gb-simon/password-generator"
                image={this.state.projectTwoImage}
                class="project-default"
                title="Password Generator"
                category="PC Application"
                index="2"
              />
              <Project
                aos="fade-up"
                link="https://github.com/gb-simon/todoList-using-api-"
                image={this.state.projectFiveImage}
                class="project-default"
                title="To-do App w/ API and React-Redux"
                category="PC / Mobile Web"
                index="4"
              />
            </div>
          ) : (
            <div className="right">
              <Project
                aos="fade-up"
                link="https://github.com/gb-simon/wikipedia-viewer"
                image={this.state.projectThreeImage}
                class="project-default"
                title="Wikipedia Viewer"
                category="PC / Mobile Web"
                index="0"
                color="rgba(11, 156, 150, 0.95)"
              />
              <Project
                aos="fade-up"
                link="https://github.com/gb-simon/socialMedia/"
                image={this.state.projectFourImage}
                color="rgba(233, 111, 94, 0.95)"
                title="socialMedia - Twitter Clone"
                class="project-last"
                category="PC / Mobile Web"
                index="3"
              />
              <Project
                aos="fade-up"
                link="https://github.com/gb-simon/todoList-using-api-"
                image={this.state.projectFiveImage}
                class="project-default"
                title="To-do App w/ API and React - Redux"
                category="PC / Mobile Web"
                index="4"
              />
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Projects;
