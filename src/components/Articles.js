import React from "react";
import "./../App.css";
import "../Responsive.css";
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
            className="link-reference"
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
            aos={article.aos}
            link={article.link}
            class={article.class}
            title={article.title}
            subtitle={article.subtitle}
            date={article.date}
            dateClass={article.dateClass}
            index={article.index}
          />
        ))}
      </div>
    </section>
  </div>
);

export default Articles;
