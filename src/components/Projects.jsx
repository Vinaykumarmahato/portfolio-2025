import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectsData = [
    {
        title: "Homemade Food Marketplace",
        image: "/img/home mad.png",
        desc: "Full-stack platform connecting home cooks with customers. Features secure login, order tracking, payment integration.",
        stack: ["Java", "Spring Boot", "React", "MySQL"],
        links: { github: "https://github.com/Vinaykumarmahato/homemade-food-marketplace" }
    },
    {
        title: "QuickServe Online",
        image: "/img/quick service.png",
        desc: "Local e-service marketplace offering bookings for services like printing, repairs with AI recommendations.",
        stack: ["Spring Boot", "React", "Python", "TensorFlow"],
        links: { github: "https://github.com/Vinaykumarmahato/quickserve-online" }
    },
    {
        title: "L-EduTrack AI Platform",
        image: "/img/Edutrack.png",
        desc: "AI-powered gamified learning platform offering personalized learning paths and real-time analytics.",
        stack: ["Microservices", "Spring Boot", "React", "AI Models"],
        links: { github: "https://github.com/Vinaykumarmahato/L-EduTrack-AI-Learning-Platform" }
    },
    {
        title: "AI Mock Interview",
        image: "/img/ai moc.png",
        desc: "Simulates real-world interviews using AI, helping users practice coding and system design.",
        stack: ["Java", "React", "OpenAI API", "MongoDB"],
        links: { github: "https://github.com/Vinaykumarmahato/AI-Mock-Interview-Platform" }
    },
    {
        title: "50+ AI Frontend Websites",
        image: "/img/50 project.png",
        desc: "Collection of 50+ stunning frontend websites generated using AI design tools and modern web tech.",
        stack: ["HTML", "CSS", "JS", "AI Tools"],
        links: { github: "https://github.com/Vinaykumarmahato/Frontend-AI-Projects" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Signature Projects</h2>
                    <p className="section-subtitle">Highlighting impactful solutions and pioneering innovations.</p>
                </motion.div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="icon-btn">
                                            <Github size={20} />
                                        </a>
                                        {/* <a href="#" className="icon-btn"><ExternalLink size={20} /></a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="project-tags">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
