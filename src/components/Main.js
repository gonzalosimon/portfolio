import React from "react";
import Header from "./Header.js";
import "../App.css";
import "../styles/main.css";
import "../Responsive.css";
import "../Hamburgers.css";

const Main = () => {
  return (
    <div className="body">
      <Header />
      <div className="container element-animation description">
        <img
          src="https://avatars.githubusercontent.com/u/53063584?v=4"
          alt="gonzalo simon image"
          className="profile"
        />
        <h1>Gonzalo Simon</h1>
        <p>I'm a software developer based in Córdoba, Argentina</p>
        <p>My tech stack is TypeScript, Reactjs & Nodejs</p>
        <p className="contact-mail">aguilargzb@gmail.com</p>
      </div>
    </div>
  );
}

export default Main;
