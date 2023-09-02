import React from "react";
import Client from "./Schemas/Client.js";
import { clientsList } from "./Lists.js";
import profile from "./../assets/picture.jpeg";
import "./Styles/Main.css";
import "./Styles/Experience.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="profile-info">
          <img src={profile} alt="Gonzalo Simon" className="profile-img" />
          <div className="profile-text">
            <h1>Gonzalo Simon</h1>
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
            I'm a Software Engineer with more than three years of experience in the industry.
          </p>
          <p>
            I initiated my programming at 16 years old and pursued two years of study in Computer Engineering. In addition, I completed two intensive boot camps. Seeking to solidify my expertise further, I transitioned my academic focus to Computer Science at Universidad Nacional de Córdoba, where I have been cultivating a robust foundation in software development.
          </p>
          <p>
            I am deeply passionate about problem-solving and the implementation of agile methodologies. I value the ability to empathize with customers and understand their needs. Outside my technical pursuits, I maintain a balanced lifestyle through fitness, reading, and guitar playing. Committed to continuous learning, I seize every opportunity to contribute positively to the technology sector.
          </p>

          <div className="about-links">
            <a href="https://drive.google.com/file/d/1v_d6wG6EgxIWoRn0Mf1w0NxXJdEyumah/view?usp=sharing">
              MY CV
            </a>
            <a href="https://www.linkedin.com/in/gonzalo-simon-aguilar/">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="body">
      <section className="element-animation">
        <div className="grid-container">
          <div className="profile-column">
            <Main />
          </div>
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
        </div>
      </section>
    </div>
  );
};

export default Experience;
