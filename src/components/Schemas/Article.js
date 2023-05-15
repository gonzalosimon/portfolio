import React from "react";
import "../Styles/Articles.css";
import "../../App.css";
import "../../Responsive.css";

const Article = ({
  title,
  link,
  subtitle,
  date,
}) => {
  return (
    <div data-aos={"fade-down"} className="article">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="article-default">
          <div className="article-contents">
            <p className="article-title">{title}</p>
            <p className="article-subtitle">{subtitle}</p>
            <p className="article-date">{date}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Article;
