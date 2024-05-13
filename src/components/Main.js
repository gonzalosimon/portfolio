import React from "react";
import Client from "./Schemas/Client.js";
import { clientsList } from "./Lists.js";
import profile from "./../assets/picture.jpeg";
import "./Styles/Main.css";
import "./Styles/Experience.css";
import { Link } from "react-router-dom";

const ProfileDescription = () => {
  const CV = `https://drive.google.com/file/d/13C8S2HnLqeb0W657qffj4a6P17I0KR2d/view?usp=sharing`;

  return (
    <div className="container">
      <div className="profile-info">
        <img src={profile} alt="Gonzalo Simon" className="profile-img" />
        <div className="profile-text">
          <h1 className="profile-name-title">Gonzalo S. Aguilar</h1>

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
          I'm a Software Engineer with more than three years of experience in
          the industry.
        </p>

        <p>
          I began programming at the age of 16 and later pursued two years of
          studies in Computer Engineering. Afterwards, I completed two intensive
          boot camps and shifted my academic focus to Computer Science at the
          niversity of London.
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
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience-column">
      <h1>Experiences</h1>

      <div className="experience-grid">
        {clientsList.map((client) => (
          <Link to={`/experience/${client.client}`} key={client.index}>
            <Client
              description={client.description}
              client={client.client}
              position={client.position}
              skills={client.skills}
              index={client.index}
              date={client.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="body">
      <section className="element-animation">
        <div className="grid-container">
          <div className="profile-column">
            <ProfileDescription />
          </div>

          <Experience />
        </div>
      </section>
    </div>
  );
};

export default Main;
