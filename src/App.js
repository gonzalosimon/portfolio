import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AOS from 'aos';
import './App.css';
import Main from './components/Main.js';
import Projects from './components/Projects.js';
import Articles from './components/Articles.js';
import Footer from './components/Footer.js';
import Header from './components/Header';
import JobDescription from './components/JobDescription';
import Experience from './components/Schemas/Experience.js';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.async = true;
    document.body.appendChild(script);
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={() => <Main />} />
      <Route path="/projects" component={() => <Projects />} />
      <Route path="/articles" component={() => <Articles />} />
      <Route exact path="/experience" component={() => <Experience />} />
      <Route path="/experience/:job" component={() => <JobDescription />} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
