import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Server, Users, Dumbbell } from 'lucide-react';
import './Skills.css';

const skillsData = [
    {
        category: "Programming Languages",
        icon: <Code />,
        items: ["Java (Core, J2EE, JDBC, Servlets)", "JavaScript (DOM)", "Python (Beginner)", "SQL (MySQL)", "HTML/CSS"]
    },
    {
        category: "Frameworks & Libraries",
        icon: <Layers />,
        items: ["Spring Boot, Spring MVC", "Spring Security", "Hibernate, JPA", "JSP/Servlets", "Bootstrap"]
    },
    {
        category: "Databases",
        icon: <Database />,
        items: ["MySQL (Advanced)", "Oracle (Basics)"]
    },
    {
        category: "DevOps & Tools",
        icon: <Server />,
        items: ["Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Jira", "Git & GitHub", "Maven"]
    },
    {
        category: "Soft Skills & Leadership",
        icon: <Users />,
        items: ["Mentorship (500K+ Learners)", "CEO @ Inoglle", "Public Speaking", "Content Creation"]
    },
    {
        category: "Fitness & Lifestyle",
        icon: <Dumbbell />,
        items: ["Regular Gym", "Balanced Diet", "Mental Focus", "Fitness + Tech Motivation"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Core Competencies & Technical Stack
                </motion.h2>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass-panel"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="skill-header">
                                <div className="skill-icon-wrapper">
                                    {skill.icon}
                                </div>
                                <h3>{skill.category}</h3>
                            </div>
                            <ul className="skill-list">
                                {skill.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
