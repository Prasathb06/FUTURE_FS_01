import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h2>My Resume</h2>
            <p>Download my resume to learn more about my skills and experience.</p>
            <a
                href="/resume/resume.pdf"
                download
                className="download-btn"
            >
                Download Resume
            </a>
        </section>
    );
};

export default Resume;
