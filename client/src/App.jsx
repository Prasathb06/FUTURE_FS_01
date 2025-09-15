import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Resume from "./components/Resume";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Hero />
        <Skills />
        <Projects />
        <About />
        {/* <Resume/> */}
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
