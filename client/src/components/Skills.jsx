import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { PiFileSqlBold  } from "react-icons/pi";
import "./Skills.css";

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#264de4" },
        { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
        { name: "React.js", icon: <FaReact />, color: "#61dbfb" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
        { name: "Epress.js", icon: <SiExpress />, color: "#ecf3e5ff" },
        { name: "MongoDB", icon: <SiMongodb />, color: "darkgreen" },
        { name: "SQL", icon: <PiFileSqlBold />, color: "#16319eff" },
    ];

    return (
        <section id="skills" className="skills-section" data-aos="zoom-in">
            <h2>My Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="icon" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
