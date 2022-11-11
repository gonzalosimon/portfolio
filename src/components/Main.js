import React from "react";
import Projects from "./Projects.js";
import { Box, Grid, Paper, Divider } from '@mui/material';
import "../App.css";
import "../styles/main.css";
import "../Responsive.css";

const Main = () => {
  return (
    <Grid container>
      <Grid item className="element-animation description">
        <img
          src="https://avatars.githubusercontent.com/u/53063584?v=4"
          alt="Profile"
          className="profile"
        />
        <h1>Gonzalo Simon</h1>
        <p> Hello! This is my personal page, I'm currently based in Córdoba, Argentina </p>
        <p> I'm a Full-Stack developer, dedicated to React.js & Node.js.</p>
      </Grid>
      <Grid item className="second-container">
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
        <Divider />
        <Projects />
      </Grid>
    </Grid>
  );
}

export default Main;
