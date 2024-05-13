import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Styles/Header.css";
import "./Styles/Hamburgers.css";
import MenuItem from "./MenuItem";
import { menuItems } from "./Lists";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const Header = () => {
  const [hamburgerState, setHamburgerState] = useState("off");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedTheme = localStorage.getItem("theme") || "light";
    setDarkMode(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleMenu = () =>
    setHamburgerState((prevState) => (prevState === "off" ? "on" : "off"));
  const toggleTheme = () => {
    const newTheme = darkMode === "light" ? "dark" : "light";
    setDarkMode(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const ThemeToggleButton = () => (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {darkMode === "light" ? <MoonOutlined /> : <SunOutlined />}
    </button>
  );

  return (
    <div className="header">
      <div className="navigation">
        <div className="simon">
          <Link to="/" className="active">
            Gonzalo Simon Aguilar
          </Link>

          <p className="speciality">Software Developer</p>
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
          className={`group-buttons navigation-mobile overlay ${
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

          <ThemeToggleButton />
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

          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
