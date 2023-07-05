import React from "react";
import "../App.css";
import "./Styles/About.css";
import "../Responsive.css";
import image from "./../assets/file.jpg";

const About = () => {
  return (
    <div className="body">
      <section className="element-animation">
        <div className="about-content">
          <div className="container-about">
            <img
              src={image}
              className="gonzalo-picture right-side"
              alt="gonzalo standing in a place"
            />
            <div className="left-side">
              <h1 className="about-title">About me</h1>
              <p className="text-about">
                I began programming at 16, intertwined with hardware engineering
                work and a fascination for databases and algorithms. This drove
                my love for mathematics and pushed me to study Computer Science
                at Universidad Nacional de Córdoba, building a solid foundation
                in software development. I'm passionate about agile practices
                and believe in the importance of empathy and understanding
                customer needs. Outside coding, I keep balanced with fitness,
                reading, and guitar playing. As a lifelong learner, I eagerly
                embrace every opportunity to make a positive impact in tech.
              </p>
              <div className="about-links">
                <a
                  className="about-cv"
                  href="https://drive.google.com/file/d/1v_d6wG6EgxIWoRn0Mf1w0NxXJdEyumah/view?usp=sharing"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
