import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Responsive.css";
import Article from "./Article.js";
import articleone from "../assets/article-tn-01.png";
import articletwo from "../assets/article-tn-02.png";
import articlethree from "../assets/article-tn-03.png";
import articlefour from "../assets/article-tn-04.png";
import articlefive from "../assets/article-tn-05.png";

class Articles extends Component {
  state = {
    articleOneImage: articleone,
    articleTwoImage: articletwo,
    articleThreeImage: articlethree,
    articlefourImage: articlefour,
    articlefiveImage: articlefive,
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
            <div className="anne">
              <Link to="/" className="active">
                Gonzalo Simon
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
              <div className="submenus">
                <div className="work-mobile">
                  <Link to="/">Work</Link>
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
              <div className="work">
                <Link to="/">Work</Link>
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
          <div className="speciality">MERN Developer</div>
        </section>
        <section className="articles">
          {window.innerWidth <= 1009 ? (
            <div className="left">
              {/* All this articles belong to the estribor side */}
              <p className="articles-intro">
                <a
                  className="link-reference"
                  href="https://gonzalosimon.hashnode.dev/"
                >
                  {" "}
                  I have a blog{" "}
                </a>
                where I like writing articles about my projects where I explain
                the way I code and how I think my challenges and ideas.{" "}
              </p>
              <Article
                aos=""
                link="https://gonzalosimon.hashnode.dev/javascript-algorithm-challenge-job-interview-challenge"
                class="article-default"
                image={this.state.articlefiveImage}
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
                image={this.state.articlefourImage}
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
                image={this.state.articleTwoImage}
                title={["To-Do App", <br />, "w/ React & Redux"]}
                subtitle="[Job Interview Challenge]"
                date="5 Jan, 2021"
                dateClass="article-date two-line"
                index="5"
              />
              <Article
                aos=""
                link="https://gonzalosimon.hashnode.dev/how-i-got-started-coding"
                image={this.state.articleThreeImage}
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
                <a
                  className="link-reference"
                  href="https://gonzalosimon.hashnode.dev/"
                >
                  {" "}
                  I have a blog{" "}
                </a>
                where I like writing articles about my projects where I explain
                the way I code and how I think my challenges and ideas.{" "}
              </p>
              <Article
                aos=""
                link="https://gonzalosimon.hashnode.dev/wikipedia-viewer-with-react"
                class="article-default"
                image={this.state.articlefourImage}
                title={["Wikipedia Viewer", <br />, "w/ React"]}
                subtitle="[Personal Project]"
                date="5 Jan, 2021"
                dateClass="article-date two-line"
                index="6"
              />
              <Article
                aos=""
                link="https://gonzalosimon.hashnode.dev/how-i-got-started-coding"
                image={this.state.articleThreeImage}
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
                image={this.state.articleOneImage}
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
                image={this.state.articleOneImage}
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
                image={this.state.articleOneImage}
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
                image={this.state.articleOneImage}
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
                image={this.state.articleOneImage}
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
                image={this.state.articleOneImage}
                title={["Football Game", <br />, "With JavaScript"]}
                subtitle="[Part 1]"
                date="December 12, 2020"
                dateClass="article-date two-line"
                index="0"
              />
            </div>
          ) : (
            <div className="right">
              {/* All this articles belong to the estribor side */}
              <Article
                aos=""
                link="https://gonzalosimon.hashnode.dev/javascript-algorithm-challenge-job-interview-challenge"
                class="article-default"
                image={this.state.articlefiveImage}
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
                image={this.state.articleTwoImage}
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
                image={this.state.articleOneImage}
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
                image={this.state.articleOneImage}
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
