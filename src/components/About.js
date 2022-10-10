import React, { Component } from "react";
import "../App.css";
import "../styles/about.css";
import "../Responsive.css";
import Header from "./Header";

class About extends Component {
  render() {
    return (
      <div className="body">
        <Header />

        <section className="element-animation about">
          <div className="about-content">
            <div>
              <span className="about-title">About me</span>
              <p>
                I'm a Full-Stack developer based in Cordoba, Argentina. 
                I keep studying computer science at Universidad Nacional
                de Cordoba. I like to work using agile practices, focusing on
                delivering value to customers. I love music and reading. I play
                the guitar and (blah.)
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
            href="https://drive.google.com/file/d/1KH_MBo_phMint3LPDhPs0VBrktExt-iL/view?usp=sharing"
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
