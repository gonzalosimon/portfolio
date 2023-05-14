import React from "react";
import "../App.css";
import "./Styles/About.css";
import "../Responsive.css";

const About = () => {

  return (
    <div className="body">
      <section className="element-animation">
        <div className="about-content">
          <div>
            <h1 className="about-title">About me</h1>
            <p>
              I've been working as a software developer for three years now, I'm studying computer science at Universidad Nacional de Cordoba. I like to work using agile practices, focusing on delivering value to customers. When I'm not coding, I love working out and reading. I play the guitar when I want get far from the twisted reach of the rainy days.
            </p>
          </div>
        </div>
      </section>
      <div className="about-links">
        <a
          className="about-certification"
          href="https://www.freecodecamp.org/certification/gonzalosimon/full-stack"
        >
          CERTIFICATION
        </a>
        <a
          className="about-cv"
          href="https://drive.google.com/file/d/1rReyzTv2465Dllvu8CX21uu1Mk6DCb1Y/view?usp=share_link"
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

export default About;
