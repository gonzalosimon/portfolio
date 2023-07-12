import React from "react";
import "./../App.css";
import "./Styles/Responsive.css";
import Article from "./Schemas/Article.js";
import "./Styles/Articles.css";
import { articlesList } from "./Lists";

const Articles = () => (
  <div className="body">
    <section className="element-animation">
      <h1>Articles</h1>
      <div>
        <p className="articles-intro">
          You can check{" "}
          <a
            className="blog-reference"
            href="https://gonzalosimon.hashnode.dev/"
          >
            my blog
          </a>{" "}
          where I write about my projects. I explain the way I code and how I
          think my challenges and ideas.
        </p>
        {articlesList.map((article) => (
          <Article
            key={article.index}
            link={article.link}
            title={article.title}
            subtitle={article.subtitle}
            date={article.date}
            index={article.index}
          />
        ))}
      </div>
    </section>
  </div>
);

export default Articles;
