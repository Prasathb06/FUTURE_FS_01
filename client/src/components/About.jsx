import React from "react";
import "./About.css";
import profileImg from "../assets/Arun.jpeg";

const About = () => {
    return (
        <div className="about-section" id="about" data-aos="fade-right">
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    I am Arun Prasath, a motivated Junior MERN Stack Developer with a strong foundation in building modern web applications. I specialize in JavaScript, React.js, Node.js, Express.js, and database technologies like MongoDB and MySQL. Through hands-on projects, I have gained experience in creating scalable, efficient, and user-friendly solutions that meet client requirements.
                </p>
                <p>
                    I am passionate about developing clean and optimized code, integrating RESTful APIs, and solving complex problems with innovative approaches. My experience working in collaborative environments has strengthened my teamwork and communication skills, allowing me to deliver projects effectively in fast-paced settings.
                </p>
                <p>
                    Eager to grow as a Full-Stack Developer, I am always learning new technologies and improving my expertise to contribute value to dynamic teams and exciting projects.
                </p>
            </div>
            <div className="profile-card">
                <img src={profileImg} alt="Profile" />
            </div>
        </div>

    );
};

export default About;
