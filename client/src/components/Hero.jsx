// import React from "react";
// import "./Hero.css";


// const Hero = () => {
//   return (
//     <section className="hero-section" data-aos="fade-up">
//       <div className="hero-content">
//         <h1 data-aos="fade-down">Hi, I'm Arun Prasath</h1>
//         <p data-aos="fade-right">A passionate web developer specializing in React.js and creative designs.</p>
//         <a href="#projects" className="btn" data-aos="zoom-in">View My Work</a>
//       </div>
//     </section>

//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="hero-section" id="home">
      {/* Navbar inside Hero */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Arun Prasath</div>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-toggle" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 data-aos="fade-down">Hi, I'm Arun Prasath</h1>
        <p data-aos="fade-right">
          A passionate Full Stack Developer skilled in JavaScript, React.js, Node.js, Express.js, and MongoDB/MySQL. I build scalable, responsive, and user-friendly web applications, integrating REST APIs and efficient database solutions. Passionate about problem-solving and teamwork, I’m eager to grow as a Full-Stack Developer and contribute to innovative projects.
        </p>
        <a href="#projects" className="btn" data-aos="zoom-in">Explore My Work</a>
      </div>
    </section>
  );
};

export default Hero;
