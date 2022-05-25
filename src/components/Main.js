import React, { Component } from "react";
import Header from "./Header.js";
import "../App.css";
import "../styles/main.css";
import "../Responsive.css";
import "../Hamburgers.css";

class Main extends Component {
  render() {
    return (
      <div className="body">
        <Header />
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
