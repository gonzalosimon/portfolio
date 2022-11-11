import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import Main from "./components/Main.js";
import About from "./components/About.js";
import Articles from "./components/Articles.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import AOS from "aos";

class App extends Component {
  componentMount() {
    window.scrollTo(0, 0);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    AOS.init();

    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
