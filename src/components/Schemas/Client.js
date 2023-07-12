import React from "react";
import "../../App.css";
import "../Styles/Clients.css";

const Client = ({ client, skills, position, date }) => {
  return (
    <div data-aos={"fade-up"} className="client">
      <div className="client-default">
        <div className="client-contents">
          <p className="client-title">{client}</p>
          <p className="client-subtitle">{position}</p>
          <p className="client-date">{date}</p>
          <p className="client-skills">{skills}</p>
        </div>
      </div>
    </div>
  );
};

export default Client;