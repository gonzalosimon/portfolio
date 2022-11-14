import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/header.css"
import { Grid } from '@mui/material';

const Header = () => {
    return (
        <Grid container direction={{ xs: "column", sm: "row" }} justifyContent="center" className="header navigation">
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/about">About</Link>
        </Grid>
    );
}

export default Header;
