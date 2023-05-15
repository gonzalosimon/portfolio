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
              I started programming when I was 16 years old. I did two years of
              hardware engineering, and at the same time, I worked as a
              programmer. The topics I enjoyed most were databases and
              algorithms, both made me realize my love for mathematics, so
              although I am already working as a software developer, in my free
              time, I'm still studying. I started Licenciatura en Ciencias de la
              Computación, which is equivalent to Computer Science at the
              Universidad Nacional de Córdoba in my city. I have built a strong
              foundation in coding and software development. I am passionate
              about agile practices, focusing on delivering value to customers
              and working effectively in diverse teams. My belief in success
              extends beyond coding skills and involves empathy, communication,
              and understanding customer needs. Outside coding, I maintain a
              balanced lifestyle by working out, reading, and playing the
              guitar. Fitness keeps me energized while reading broadens my
              perspective and serves as a source of relaxation. Playing the
              guitar allows me to tap into my creative side, offering a welcome
              break from coding. As a software developer at heart, a student in
              spirit, and an individual cherishing life's experiences, I look
              forward to embracing every opportunity to learn, grow, and make a
              positive impact in the world of technology.
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
};

export default About;
