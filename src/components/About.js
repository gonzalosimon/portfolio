import React from "react";
import "../App.css";
import "../styles/about.css";
import "../Responsive.css";
import { Grid } from '@mui/material';

const About = () => {
  return (
    <Grid container className="about-container" justifyContent="center" xs={4} md={8}>
      <Grid item className="element-animation about">
        <div className="about-content">
          <div>
            <h2 className="about-title">About me</h2>
            <p>
              I'm a Full-Stack developer based in Cordoba, Argentina.
              I keep studying computer science at Universidad Nacional
              de Cordoba. I like to work using agile practices, focusing on
              delivering value to customers. I love music and reading. Sometimes I play guitar, far from the twisted reach of crazy sorrow.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item className="about-links">
        <a
          className="about-certification"
          href="https://www.freecodecamp.org/certification/gonzalosimon/full-stack"
        >
          CERTIFICATION
        </a>
        <a
          className="about-cv"
          href="https://drive.google.com/file/d/1snjAwe0L93FUN1U828FQUfb2G5Nz9SvX/view?usp=share_link"
        >
          MY CV
        </a>
        <a
          className="about-linkedin"
          href="https://www.linkedin.com/in/gonzalo-simon-aguilar/"
        >
          LINKEDIN
        </a>
      </Grid>
    </Grid>
  );
}

export default About;
