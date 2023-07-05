import React from "react";
import "../App.css";
import "./Styles/Main.css";
import "../Responsive.css";
import "../Hamburgers.css";
import profile from "./../assets/pic.jpg"

const Main = () => {
  return (
    <div className="body">
      <div className="container description">
        <img
          src={profile}
          alt="This is Gonzalo Simon"
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
