import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, Globe, Terminal } from 'lucide-react';
import './Skills.css';

const skillCategories = [
    {
        title: "LANGUAGES",
        icon: <Code />,
        skills: [
            { name: "Java", level: 95 },
            { name: "JavaScript", level: 85 },
            { name: "Python", level: 70 },
            { name: "SQL", level: 90 },
            { name: "HTML/CSS", level: 90 }
        ]
    },
    {
        title: "FRAMEWORKS",
        icon: <Globe />,
        skills: [
            { name: "Spring Boot", level: 92 },
            { name: "React", level: 80 },
            { name: "Hibernate", level: 85 },
            { name: "Node.js", level: 75 },
            { name: "Bootstrap", level: 88 }
        ]
    },
    {
        title: "INFRASTRUCTURE",
        icon: <Server />,
        skills: [
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 65 },
            { name: "AWS", level: 70 },
            { name: "MySQL", level: 90 },
            { name: "Git/GitHub", level: 95 }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="cyber-skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    System Capabilities
                </motion.h2>

                <div className="skills-matrix">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-module glass-panel"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="module-header">
                                <span className="module-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skill-bars">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="progress-track">
                                            <motion.div
                                                className="progress-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="corner-decor top-left"></div>
                            <div className="corner-decor bottom-right"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
