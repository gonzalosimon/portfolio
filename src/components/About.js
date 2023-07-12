import React from "react";
import "../App.css";
import "./Styles/About.css";

const About = () => {
  return (
    <div className="body">
      <section className="element-animation">
        <div className="about-content">
          <div className="container-about">
            <div className="left-side">
              <h1 className="about-title">About me</h1>
              <p className="text-about">
                I began programming at 16. Studied 2 years of computer
                engineering and completed two bootcamps. I changed my major to
                study Computer Science at Universidad Nacional de Córdoba,
                building a solid foundation in software development.
              </p>
              <p>
                I'm passionate about problem solving, agile practices and
                believe in the importance of empathy and understanding customer
                needs. Outside coding, I keep balanced with fitness, reading,
                and guitar playing. As a lifelong learner, I like taking every
                opportunity to make a positive impact in tech.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
