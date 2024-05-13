import React from "react";
import "../Styles/Articles.css";
import "../../App.css";

const Article = ({ title, link, subtitle, date }) => {
  return (
    <div data-aos={"fade-up"} className="article article-div">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="article-contents">
          <p className="article-title">{title}</p>
          <p className="article-subtitle">{subtitle}</p>
          <p className="article-date">{date}</p>
        </div>
      </a>
    </div>
  );
};

export default Article;
