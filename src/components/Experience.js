import React from "react";
import "./../App.css";
import "../Responsive.css";
import "./Styles/Experience.css"
import Client from "./Schemas/Client.js";
import { clientsList } from "./Lists";

const Experience = () => {
  return (
    <div className="body">
      <section className="element-animation">
        <h1>Projects</h1>
        <p className="clients-intro">
         I've worked for different clients, you can check them on my{" "}
          <a className="linkedin-reference" href="https://www.linkedin.com/in/gonzalo-simon-aguilar">
          LinkedIn profile
          </a>
          .
        </p>
        <div className="clients">
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
      </section>
    </div>
  );
};

export default Experience;
