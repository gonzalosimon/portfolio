import React from "react";
import Client from "./Client.js";
import { Link } from "react-router-dom";
import "../Styles/Experience.css";
import { clientsList } from "../Lists.js";

const Experience = () => {
  return (
    <div className="experience-column">
      <h1>Experiences</h1>

      <div className="experience-grid">
        {clientsList.map((client) => (
          <Link to={`/experience/${(client.client)}`} key={client.index}>
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

export default Experience;
