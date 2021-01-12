import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import Main from "./Components/Main.js";
import About from "./Components/About.js";
import Articles from "./Components/Articles.js";
import Footer from "./Components/Footer.js";
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
        <Route exact path="/" component={Main} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
