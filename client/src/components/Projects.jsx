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
            deployLink: "https://welearninstitution-1.onrender.com"
        },
        {
            title: "Fit_Factory",
            description: "Fit Factory is a fully responsive front-end fitness e-commerce website designed to promote and sell gym-related products. The platform provides users with an engaging interface to explore workout gear, supplements, and fitness accessories. The website emphasizes modern UI design, smooth navigation, and a professional shopping experience using only client-side technologies.",
            image: projectimg1,
            deployLink: "https://fit-factory01.netlify.app/"
        },
        {
            title: "Blog Platform",
            description: "Created a fitness education website for training programs and product sales.Used HTML, CSS, Bootstrap, and JavaScript to design a mobile-friendly, responsive UI.Optimized cross-device compatibility, ensuring 100% accessibility on mobile and desktop.Improved user engagement by developing a visually appealing and easy-to-navigate interface.",
            image: "",
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
