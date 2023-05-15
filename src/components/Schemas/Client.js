import React from "react";
import "../../App.css";
import "../../Responsive.css";
import "../Styles/Experience.css";

const Client = ({
  description,
  client,
  link,
  position,
  date,
  tools,
}) => {
  return (
    <div data-aos={"fade-up"} className="client">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="client-default">
          <div className="client-contents">
            <p className="client-title">{client}</p>
            <p className="client-subtitle">{position}</p>
            <p className="client-date">{date}</p>
            <p className="client-tools">{tools}</p>
            <p className="client-description">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Client;
