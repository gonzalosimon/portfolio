import React from "react";
import Projects from "./Projects.js";
import { Grid, Divider } from '@mui/material';
import "../App.css";
import "../styles/main.css";
import "../Responsive.css";

const Main = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item className="element-animation description">
        <img
          src="https://avatars.githubusercontent.com/u/53063584?v=4"
          alt="Profile"
          className="profile"
        />
        <h1>Gonzalo Simon</h1>
        <p>Hello! This is my personal page</p>
        <p>I'm a software developer based in Córdoba, Argentina</p>
      </Grid>
      <Grid item className="second-container">
        <h4 className="tech">My tech stack is Typescript, Reactjs & Nodejs</h4>
        <h3 className="companies">Companies I worked for</h3>
        <Grid
          container item
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="worked">
          <p>RetiaSoft</p>
          <p>MartinMarietta</p>
          <p>Playboy</p>
          <p>ArkusNexus</p>
          <p>Figo</p>
        </Grid>
        <hr>
        </hr>
        <Projects />
      </Grid>
    </Grid>
  );
}

export default Main;
