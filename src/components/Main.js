import React from "react";
import profile from "./../assets/picture.jpeg";
import "./Styles/Main.css";

const ProfileDescription = () => {
  const CV = `https://drive.google.com/file/d/13C8S2HnLqeb0W657qffj4a6P17I0KR2d/view?usp=sharing`;

  return (
    <>
      <div className="profile-info">
        <img src={profile} alt="Gonzalo Simon" className="profile-img" />
        <div className="profile-text">
          <h1 className="profile-name-title">Gonzalo Simon Aguilar</h1>

          <p>
            <span aria-label="location" role="img">
              📍
            </span>
            Córdoba, Argentina
          </p>

          <p>
            <span aria-label="technologies" role="img">
              💻
            </span>
            TypeScript, Reactjs & Nodejs
          </p>

          <p>
            <span aria-label="technologies" role="img">
              🏫
            </span>
            University of London
          </p>

          <p className="contact-mail">
            <span aria-label="email" role="img">
              📧
            </span>
            aguilargzb@gmail.com
          </p>
        </div>
      </div>

      <div className="text-main-section">
        <p>
          With four years of experience now. I began programming at the age of
          16 and later pursued two years of studies in Computer Engineering.
          Afterwards, I completed two intensive boot camps and shifted my
          academic focus to Computer Science at the niversity of London.
          <span></span>
        </p>

        <p>
          Outside my technical pursuits, I maintain a balanced lifestyle through
          fitness, reading, and guitar playing.
        </p>

        <div className="about-links">
          <a href={CV}>MY CV</a>

          <a href="https://www.linkedin.com/in/gonzalo-simon-aguilar/">
            LINKEDIN
          </a>
        </div>
      </div>
    </>
  );
};

const Main = () => {
  return (
    <div className="body">
      <section className="container element-animation">
        <ProfileDescription />
      </section>
    </div>
  );
};

export default Main;
