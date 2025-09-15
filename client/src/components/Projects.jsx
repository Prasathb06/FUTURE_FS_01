import React from "react";
import "./Projects.css";
import projectimg from "../assets/project/p.jpg";
import projectimg1 from "../assets/project/p1.jpg";

const Projects = () => {
    const projects = [
        {
            title: "WeLearn Institution",
            description: "Built a full-stack e-commerce and learning platform using React, Node.js, Express, and MongoDB. Developed user authentication, a course marketplace, and an admin dashboard for course management. Designed and integrated REST APIs for secure data handling and scalability. Delivered a fully responsive frontend to improve user accessibility across devices. Enhanced the learning experience by enabling users to register, browse, and purchase courses seamlessly.",
            image: projectimg,
            deployLink: "https://your-lively-deploy-link.com"
        },
        {
            title: "E-commerce App",
            description: "A full-featured e-commerce application using Node.js and MongoDB.",
            image: "https://via.placeholder.com/300x200.png?text=E-commerce",
            deployLink: "https://your-lively-ecommerce-link.com"
        },
        {
            title: "Blog Platform",
            description: "Created a fitness education website for training programs and product sales.Used HTML, CSS, Bootstrap, and JavaScript to design a mobile-friendly, responsive UI.Optimized cross-device compatibility, ensuring 100% accessibility on mobile and desktop.Improved user engagement by developing a visually appealing and easy-to-navigate interface.",
            image: projectimg1,
            deployLink: "https://your-lively-blog-link.com"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.deployLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="deploy-btn"
                            >
                                Deploy
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
