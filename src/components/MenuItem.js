import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Header.css";

const MenuItem = ({ label, to, toggleMenu, mobile }) => {
  const clickHandler = mobile ? toggleMenu : null;

  return (
    <div className="menu-item">
      <Link to={to} onClick={clickHandler}>
        {label}
      </Link>
    </div>
  );
};

export default MenuItem;
