import React from "react";
import Client from "./Schemas/Client.js";
import { clientsList } from "./Lists.js";
import profile from './../assets/pic.jpg';
import './Styles/Clients.css';

const Main = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="profile-info">
          <img src={profile} alt="Gonzalo Simon" className="profile-img" />
          <div className="profile-text">
            <h1>Gonzalo Simon</h1>
            <p><span role="img" aria-label="location">📍</span>Córdoba, Argentina</p>
            <p><span role="img" aria-label="tech">💻</span>TypeScript, Reactjs & Nodejs</p>
            <p className="contact-mail">📧 aguilargzb@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
                <Client
                  description={client.description}
                  client={client.client}
                  position={client.position}
                  tools={client.tools}
                  index={client.index}
                  date={client.date}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
