import React from "react";
import Client from "./Schemas/Client.js";
import { clientsList } from "./Lists.js";
import profile from "./../assets/pic.jpg";
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
              <span role="img" aria-label="location">
                <span aria-label="location" role="img">
                  📍
                </span>
              </span>
              Córdoba, Argentina
            </p>
            <p>
              <span role="img" aria-label="tech">
                <span aria-label="technologies" role="img">
                  💻
                </span>
              </span>
              TypeScript, Reactjs & Nodejs
            </p>
            <p className="contact-mail">
              <span aria-label="email" role="img">
                📧
              </span>{" "}
              aguilargzb@gmail.com
            </p>
          </div>
        </div>
        <div>
          <p>
            I'm a developer with more 3 years of experience in the industry.
          </p>
          <p>
            I began programming at 16. Studied 2 years of computer engineering
            and completed two bootcamps. I changed my major to study Computer
            Science at Universidad Nacional de Córdoba, building a solid
            foundation in software development.
          </p>
          <p>
            I keep balanced with fitness, reading, and guitar playing. As a
            lifelong learner, I like taking every opportunity to make a positive
            impact in tech.
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
            <Main /> {/* Insert your Main component here */}
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
