import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Responsive.css";
import Article from "./Article.js";

class Articles extends Component {
  state = {
    hamburgerState: "off",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger");
    let overlay = document.querySelector(".overlay");
    if (this.state.hamburgerState === "off") {
      hamburger.classList.add("is-active");
      overlay.classList.remove("hide");
      overlay.classList.add("show");
      this.setState({ hamburgerState: "on" });
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({ hamburgerState: "off" });
    }
  };

  render() {
    return (
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="simon">
              <Link to="/" className="active">
                Gonzalo
              </Link>
            </div>
            <button
              className="hamburger hamburger--spin mobile"
              type="button"
              onClick={this.toggleMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="sub-menus">
                <div className="main-mobile">
                  <Link to="/">Home</Link>
                </div>
                <div className="work-mobile">
                  <Link to="/projects">Work</Link>
                </div>
                <div className="articles-mobile">
                  <Link to="/articles" className="active">
                    Articles
                  </Link>
                </div>
                <div className="about-mobile">
                  <Link to="/about">About</Link>
                </div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="main">
                <Link to="/">Home</Link>
              </div>
              <div className="work">
                <Link to="/projects">Work</Link>
              </div>
              <div className="articles">
                <Link to="/articles" className="active">
                  Articles
                </Link>
              </div>
              <div className="about">
                <Link to="/about">About</Link>
              </div>
            </div>
          </div>
          <div className="designer">JavaScript Developer</div>
          <div className="speciality">MERN Stack</div>
        </section>
        <section className=" articles">
          {window.innerWidth <= 1009 ? (
            <div className="element-animation left">
              {/* All this articles belong to the estribor side */}
              <p className="articles-intro">
                You can check{" "}
                <a
                  className="link-reference"
                  href="https://gonzalosimon.hashnode.dev/"
                >
                  my blog
                </a>{" "}
                where I write about my projects. I explain the way I code and
                how I think my challenges and ideas.{" "}
              </p>
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
            </div>
          ) : (
            <div className="left">
              {/* All this articles belong to the babor side */}

              <p className="articles-intro">
                You can check{" "}
                <a
                  className="link-reference"
                  href="https://gonzalosimon.hashnode.dev/"
                >
                  my blog
                </a>{" "}
                where I write about my projects. I explain the way I code and
                how I think my challenges and ideas.{" "}
              </p>
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
            </div>
          )}
          {window.innerWidth <= 1009 ? (
            <div className="right">
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
          ) : (
            <div className="right">
              {/* All this articles belong to the estribor side mobile screen*/}
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
                link="https://gonzalosimon.hashnode.dev/to-do-app-with-react-and-redux-job-interview-challenge-1"
                class="article-default"
                title={["To-Do App", <br />, "w/ React & Redux"]}
                subtitle="[Job Interview Challenge]"
                date="5 Jan, 2021"
                dateClass="article-date two-line"
                index="4"
              />
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
                link="https://gonzalosimon.hashnode.dev/football-game-with-javascript-part-2"
                class="article-default"
                title={["Football Game", <br />, "With JavaScript"]}
                subtitle="[Part 2]"
                date="23 Dec, 2020"
                dateClass="article-date two-line"
                index="1"
              />
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Articles;
