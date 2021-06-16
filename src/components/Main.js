import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/main.css";
import "../Responsive.css";
import "../Hamburgers.css";

class Main extends Component {
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
                  <Link to="/" className="active">
                    Home
                  </Link>
                </div>

                <div className="work-mobile">
                  <Link to="/projects">Work</Link>
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
                <Link to="/" className="active">
                  Home
                </Link>
              </div>
              <div className="work">
                <Link to="/projects">Work</Link>
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

        <div className="container">
          <div className="element-animation">
            <div className="description">
              <img
                src="https://avatars.githubusercontent.com/u/53063584?v=4"
                alt="Profile"
                className="profile"
              />
              <h2>Gonzalo Simon</h2>
              <p> Full Stack Developer</p>
              <div className="desc">
                <p>Córdoba, Argentina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
