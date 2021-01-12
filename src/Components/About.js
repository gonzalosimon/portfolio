import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Responsive.css";
import profile from "../assets/profile.png";
import link from "../assets/link-icon.svg";

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
            <div className="anne">
              <Link to="/" className="active">
                Gonzalo Simon
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
              <div className="submenus">
                <div className="work-mobile">
                  <Link to="/">Work</Link>
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
              <div className="work">
                <Link to="/">Work</Link>
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
          <div className="speciality">MERN Developer</div>
        </section>

        <section className="about">
          <img src={profile} alt="Profile" className="about-image" />
          <div className="about-content">
            <div>
              <span className="about-title">About me</span>
              <br />
              <p>
                {" "}
                I'm based in Cordoba, Argentina currently studying computer
                sicence at Universidad Nacional de Cordoba.
              </p>
              <p>
                I'm a Linux user, I have Fluent English, I'm native in Spanish
                and I have Advance French skills.
              </p>
            </div>

            <div data-aos="fade-up">
              <p>
                I learned Responsive Web Desing with HTML and CSS. I've made a
                lot of Python automatizations, and worked with JavaScript
                algorithms and data structures.
              </p>
              <p>
                Front End Libraries, on of my projects React and Redux. This is
                what I used the most in my projects. This portfolio is made with
                React!
              </p>
              <p>
                With D3 I made beautiful graphics and tables on my projects of
                Data Visutalization where I also learned using JSON, APIs and
                AJAX.
              </p>
              <p>
                I started using API's and Microservices with in projects a
                little more complex. Managing Packages with npm. I practiced
                with basic Node and Express Challenges. During this section I
                also learned with MongoDB and Mongoose Challenges.{" "}
              </p>
              <p>
                {" "}
                The last of the tools I learned on freeCodeCamp was the
                Information Security with HelmetJS Challenges. HelmetJS is a
                type of middleware for Express-based applications that
                automatically sets HTTP headers to prevent sensitive information
                from unintentionally being passed between the server and client.
              </p>
            </div>
          </div>
        </section>
        <div className="about-resume">
          <a href="https://www.freecodecamp.org/certification/gonzalosimon/full-stack">
            CERTIFICATION{" "}
          </a>
          <a href="https://drive.google.com/file/d/1OQULoHEVpPO02y1rDZCgYyJULCK9LSv7/view?usp=sharing">
            My CV
          </a> 
        </div>
        <p className="about-content credit">
          {" "}
          The portfolio's <strong>design idea</strong> is made by{" "}
          <a
            href="https://github.com/hermy0211/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anne Lee
            <img className="link-icon" src={this.state.link} alt="Link Icon" />
          </a>
        </p>
      </div>
    );
  }
}

export default About;
