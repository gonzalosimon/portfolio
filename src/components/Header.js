import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/header.css"

const Header = () => {
    return (
        <section className="header">
            <div className="navigation">
                <div className="home">
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div className="articles">
                    <Link to="/articles">Articles</Link>
                </div>
                <div className="about">
                    <Link to="/about">About</Link>
                </div>
            </div>
        </section>
    );
}

export default Header;
