import React, { Component } from "react";
import "./../App.css";
import "../Responsive.css";
import Article from "./Schemas/Article.js";
import Header from "./Header";

class Articles extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <section className=" element-animation left">
          <div className="">
            {/* All this articles belong to the estribor side */}
            <p className="articles-intro">
              You can check{" "}
              <a
                className="link-reference"
                href="https://gonzalosimon.hashnode.dev/"
              >
                my blog
              </a>{" "}
              where I write about my projects. I explain the way I code and how
              I think my challenges and ideas.{" "}
            </p>
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/social-media-withmern-stack"
              class="article-default"
              title={["Social Media w/MERN Stack"]}
              subtitle="[Galeria is my first social media application.]"
              date="5 Mar, 2022"
              dateClass="article-date two-line"
              index="9"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/gallery-app-unsplash-api"
              class="article-default"
              title={["Gallery App Unsplash API"]}
              subtitle="[w/React [Infinite Scroll]]"
              date="28 Jan, 2022"
              dateClass="article-date two-line"
              index="8"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/javascript-algorithm-challenge-job-interview-challenge"
              class="article-default"
              title={["JavaScript Algorithm Challenge"]}
              subtitle="[Job Interview Challenge]"
              date="5 Jan, 2021"
              dateClass="article-date two-line"
              index="7"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/wikipedia-viewer-with-react"
              class="article-default"
              title={["Wikipedia Viewer", <br />, "w/ React"]}
              subtitle="[Personal Project]"
              date="5 Jan, 2021"
              dateClass="article-date two-line"
              index="6"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/to-do-app-with-react-and-redux-job-interview-challenge-1"
              class="article-default"
              title={["To-Do App", <br />, "w/ React & Redux"]}
              subtitle="[Job Interview Challenge]"
              date="5 Jan, 2021"
              dateClass="article-date two-line"
              index="5"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/how-i-got-started-coding"
              class="article-default"
              title={["How I got started coding"]}
              date="2 Jan, 2021"
              dateClass="article-date two-line"
              index="4"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/wikipedia-viewer-with-react"
              class="article-default"
              title={["Wikipedia Viewer", <br />, "w/ React"]}
              subtitle="[Personal Project]"
              date="5 Jan, 2021"
              dateClass="article-date two-line"
              index="6"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/how-i-got-started-coding"
              class="article-default"
              title={["How I got started coding"]}
              date="2 Jan, 2021"
              dateClass="article-date two-line"
              index="4"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/football-game-with-javascript-part-3-making-the-cpu-move"
              class="article-default"
              title={["Football Game", <br />, "With JavaScript"]}
              subtitle="[Part 3]"
              date="23 Dec, 2020"
              dateClass="article-date two-line"
              index="2"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/football-game-with-javascript-part-1"
              class="article-default"
              title={["Football Game", <br />, "With JavaScript"]}
              subtitle="[Part 1]"
              date="December 12, 2020"
              dateClass="article-date two-line"
              index="0"
            />
            {/* All this articles belong to the estribor side in mobile screen */}
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/football-game-with-javascript-part-4"
              class="article-default"
              title={["Football Game", <br />, "With JavaScript"]}
              subtitle="[Part 4]"
              date="29 Dec, 2020"
              dateClass="article-date two-line"
              index="3"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/football-game-with-javascript-part-3-making-the-cpu-move"
              class="article-default"
              title={["Football Game", <br />, "With JavaScript"]}
              subtitle="[Part 3]"
              date="23 Dec, 2020"
              dateClass="article-date two-line"
              index="2"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/football-game-with-javascript-part-2"
              class="article-default"
              title={["Football Game", <br />, "With JavaScript"]}
              subtitle="[Part 2]"
              date="23 Dec, 2020"
              dateClass="article-date two-line"
              index="1"
            />
            <Article
              aos=""
              link="https://gonzalosimon.hashnode.dev/football-game-with-javascript-part-1"
              class="article-default"
              title={["Football Game", <br />, "With JavaScript"]}
              subtitle="[Part 1]"
              date="December 12, 2020"
              dateClass="article-date two-line"
              index="0"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Articles;
