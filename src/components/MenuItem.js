import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Header.css";

const MenuItem = ({ onClick, label, to, toggleMenu, mobile }) => {
  const clickHandler = mobile ? toggleMenu : null;

  return (
    <div className="menu-item">
      <button className="no-button" onClick={onClick}>
        <Link to={to} onClick={clickHandler}>
          {label}
        </Link>
      </button>
    </div>
  );
};

export default MenuItem;
