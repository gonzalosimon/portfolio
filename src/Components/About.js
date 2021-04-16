import React, { Component } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile_2.png";
import link from "../assets/link-icon.svg";
import "../App.css";
import "../Styles/about.css";
import "../Responsive.css";

class About extends Component {
  state = {
    hamburgerState: "off",
    link: link,
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
          <img src={profile} alt="Profile" className="about-image" />
          <div className="about-content">
            <div>
              <span className="about-title">About me</span>
              <br />
              <p>
                {" "}
                I'm a FullStack developer based in Cordoba, Argentina. I'm
                currently studying computer engineering at Universidad Nacional
                de Cordoba.
              </p>
              <p>
                I have Fluent English, I'm native in Spanish and I have Advance
                French skills.
              </p>
            </div>

            <div data-aos="fade-up">
              <p>
                I use React and Redux in most of my projects. (This portfolio is
                pure React!)
              </p>
              <p>
                With D3 I made beautiful graphics and tables on my projects of
                Data Visutalization where I also learned using JSON, APIs and
                AJAX.
              </p>
              <p>
                In the Back-End stack I learned using Node and Express, MongoDB.
                The last of the tools I learned on freeCodeCamp was the
                Information Security with HelmetJS Challenges.{" "}
              </p>
            </div>
          </div>
        </section>
        <div className="about-resume">
          <a
            className="about-certification"
            href="https://www.freecodecamp.org/certification/gonzalosimon/full-stack"
          >
            CERTIFICATION{" "}
          </a>
          <a
            className="about-cv"
            href="https://drive.google.com/file/d/1OQULoHEVpPO02y1rDZCgYyJULCK9LSv7/view?usp=sharing"
          >
            My CV
          </a>
        </div>
      </div>
    );
  }
}

export default About;
