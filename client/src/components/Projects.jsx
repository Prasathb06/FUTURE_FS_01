import React from "react";
import "./Projects.css";
import projectimg from "../assets/project/p.jpg";
import projectimg1 from "../assets/project/p1.jpg";
import projectimg2 from "../assets/project/p2.jpg";

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
            deployLink: "https://fit-factory0.netlify.app/"
        },
        {
            title: "Fitness & Health_Center",
            description: "The Fitness & Health Center is a responsive and visually appealing static website designed to promote a healthy lifestyle. It provides users with easy navigation to various sections such as Workout Plans, Diet Plans, Diet Foods, Cardio, Mobility, Yoga, and Store. The site uses pure HTML and CSS to create a structured layout with elegant typography, background images, and a motivational homepage banner.The project focuses on delivering a clean user interface, smooth navigation, and modern design aesthetics suitable for fitness enthusiasts and beginners alike.",
            image: projectimg2 ,
            deployLink: "https://fitness-health-center.netlify.app/"
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
