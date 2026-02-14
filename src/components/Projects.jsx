import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';
import './Projects.css';

const projects = [
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
    }
];

const Projects = () => {
    return (
        <section id="projects" className="cyber-projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    Project Archives
                </motion.h2>

                <div className="projects-grid-3d">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-slate"
                            initial={{ opacity: 0, y: 100, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                boxShadow: "0 0 40px rgba(0, 243, 255, 0.2)"
                            }}
                        >
                            <div className="slate-visual">
                                <img src={project.image} alt={project.title} className="slate-img" />
                                <div className="slate-overlay">
                                    <a href={project.links.github} target="_blank" rel="noreferrer" className="cyber-btn-icon">
                                        <Github />
                                    </a>
                                    <a href="#" className="cyber-btn-icon">
                                        <ExternalLink />
                                    </a>
                                </div>
                            </div>

                            <div className="slate-content">
                                <h3 className="slate-title">{project.title}</h3>
                                <p className="slate-desc">{project.desc}</p>

                                <div className="slate-tech">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="tech-badge">
                                            <Code size={12} /> {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="slate-corner corner-1"></div>
                            <div className="slate-corner corner-2"></div>
                            <div className="slate-corner corner-3"></div>
                            <div className="slate-corner corner-4"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
