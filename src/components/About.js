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
            src="https://instagram.fcor2-1.fna.fbcdn.net/v/t51.2885-15/278490720_356401979791195_9064762662401112983_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcor2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=zUNHkyA0MvYAX-jIfQt&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MjgxNzg5NTQxODg1Nzc5MTY0OA%3D%3D.2-ccb7-5&oh=00_AT-rKEk_q1ETUx33o-IG2R4EMUa3BLwAGekvP_R-HK1DNg&oe=62B5F406&_nc_sid=276363"
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
            href="https://drive.google.com/file/d/1gy2Uu64BJIahQTQp3VDGvELw9ZeeX-Oe/view?usp=sharing"
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
