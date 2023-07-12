import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Styles/Header.css";
import "./Styles/Hamburgers.css"
import MenuItem from "./MenuItem";
import { menuItems } from "./Lists"

const Header = () => {
  const [hamburgerState, setHamburgerState] = useState("off");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = () => {
    setHamburgerState(hamburgerState === "off" ? "on" : "off");
  };

  return (
    <div className="header">
      <div className="navigation">
        <div className="simon">
          <Link to="/" className="active">
            Gonzalo Simón
          </Link>
          <div className="speciality">Software Developer</div>
        </div>

        <button
          className={`hamburger hamburger--spin mobile hamburger-button ${
            hamburgerState === "on" ? "is-active" : ""
          }`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div
          className={`navigation-mobile overlay ${
            hamburgerState === "on" ? "show" : "hide"
          }`}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.to}
              to={item.to}
              label={item.label}
              onClick={toggleMenu}
              mobile
              lastItem
            />
          ))}
        </div>

        <div className="navigation-sub">
          {menuItems.map((item) => (
            <MenuItem
              key={item.to}
              to={item.to}
              label={item.label}
              mobile={false}
              lastItem
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
