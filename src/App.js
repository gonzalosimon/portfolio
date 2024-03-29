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

// Here's the new component that includes the Header and a specific Component
const HeaderWithComponent = ({ component: Component }) => (
  <>
    <Header />
    <Component />
  </>
);

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
      <Route exact path="/" component={() => <HeaderWithComponent component={Main} />} />
      <Route path="/projects" component={() => <HeaderWithComponent component={Projects} />} />
      <Route path="/articles" component={() => <HeaderWithComponent component={Articles} />} />
      <Route path="/experience/:job" component={() => <HeaderWithComponent component={JobDescription} />} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
