import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/about.css";
import "../Responsive.css";

class About extends Component {
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
                  <Link to="/projects">Work</Link>
                </div>
                <div className="articles-mobile">
                  <Link to="/articles">Articles</Link>
                </div>
                <div className="about-mobile">
                  <Link to="/about" className="active">
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div className="navigation-sub">
              {" "}
              <div className="main">
                <Link to="/">Home</Link>
              </div>
              <div className="work">
                <Link to="/projects">Work</Link>
              </div>
              <div className="articles">
                <Link to="/articles">Articles</Link>
              </div>
              <div className="about">
                <Link to="/about" className="active">
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="designer">JavaScript Developer</div>
          <div className="speciality">MERN Stack</div>
        </section>

        <section className="about">
          <img
            src="https://avatars.githubusercontent.com/u/53063584?v=4"
            alt="Profile"
            className="element-animation about-image"
          />
          <div className="about-content">
            <div>
              <span className="about-title">About me</span>

              <p>
                I'm a Full-Stack developer based in Cordoba, Argentina. I'm
                currently studying computer engineering at Universidad Nacional
                de Cordoba.
              </p>
              <p>
                I've fluent English and advance French. I've been a developer
                for a few years now, I made the{" "}
                <a href="https://www.freecodecamp.org">freeCodeCamp </a>course
                between 2018 and 2019, using React and Redux in most of my
                projects (This portfolio is pure React!). With D3 I made
                graphics and tables on my projects of Data Visutalization where
                I also learned using JSON, APIs and AJAX.
              </p>
            </div>
            <div data-aos="fade-up">
              <p>
                In the Back-End stack I learned using Node and Express, MongoDB.
                I made some challenges of Information Security using HelmetJS
                Challenges.{" "}
              </p>
            </div>
          </div>
        </section>
        <div className="about-links">
          <a
            className="about-certification"
            href="https://www.freecodecamp.org/certification/gonzalosimon/full-stack"
          >
            CERTIFICATION{" "}
          </a>
          <a
            className="about-cv"
            href="https://drive.google.com/file/d/13zh-meJF4Lzamsq26nL6TRu7ZCJ3fNIX/view?usp=sharing"
          >
            MY CV
          </a>
          <a
            className="about-linkedin"
            href="https://www.linkedin.com/in/gonzalo-simon-aguilar/"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    );
  }
}

export default About;
