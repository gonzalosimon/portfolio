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

        <section className="about">
          <img
            src="https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/278960062_2309644315843169_7691798677641452255_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hA1nVdDPnTsAX96aX9f&_nc_ht=scontent.fcor2-2.fna&oh=00_AT-xyoMId41bgr216LTDODkgsmMUdEmpo_1HykDdc_Bjvg&oe=62946ED5"
            alt="Profile"
            className="element-animation about-image"
          />
          <div className="about-content">
            <div>
              <span className="about-title">About me</span>
              <p>
                I'm a Full-Stack developer based in Cordoba, Argentina. I'm
                currently studying computer engineering at Universidad Nacional
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
            href="https://drive.google.com/file/d/19kkQpz8YHz-lKLPAsZKkbew7q2HUzNs_/view?usp=sharing"
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
