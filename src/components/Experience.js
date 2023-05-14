import React from "react";
import "./../App.css";
import "../Responsive.css";
import Client from "./Schemas/Client.js";
import { clientsList } from "./Lists";

const Experience = () => {
  return (
    <div className="body">
      <section>
        <h1>Projects</h1>
        <p className="projects-intro">
         I've worked for different clients, you can check them on my 
          <a className="link-reference" href="https://www.linkedin.com/in/gonzalo-simon-aguilar">
          LinkedIn profile
          </a>
          .
        </p>
        <div className="projects">
          {clientsList.map((client) => (
            <Client
              class={client.class}
              description={client.description}
              title={client.title}
              tools={client.tools}
              index={client.index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
