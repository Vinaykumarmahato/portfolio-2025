import React, { useState } from 'react';
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
            { name: "Python", level: 75 },
            { name: "SQL", level: 85 },
            { name: "C++", level: 60 }
        ]
    },
    {
        title: "FRONTEND",
        icon: <Globe />,
        skills: [
            { name: "React", level: 85 },
            { name: "HTML5/CSS3", level: 90 },
            { name: "Tailwind CSS", level: 80 }
        ]
    },
    {
        title: "BACKEND",
        icon: <Server />,
        skills: [
            { name: "Spring Boot", level: 92 },
            { name: "Node.js", level: 75 },
            { name: "REST APIs", level: 85 },
            { name: "MySQL", level: 90 },
            { name: "MongoDB", level: 75 }
        ]
    },
    {
        title: "TOOLS & PLATFORMS",
        icon: <Terminal />,
        skills: [
            { name: "Git/GitHub", level: 95 },
            { name: "Docker", level: 80 },
            { name: "VS Code", level: 95 },
            { name: "Power BI", level: 75 },
            { name: "Postman/Vercel", level: 85 }
        ]
    }
];

const Skills = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedSkills = showAll ? skillCategories : skillCategories.slice(0, 3);

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
                    {displayedSkills.map((category, index) => (
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

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button 
                        onClick={() => setShowAll(!showAll)}
                        style={{ cursor: 'pointer', background: 'var(--neon-cyan)', color: '#000', border: 'none', padding: '12px 36px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px', transition: '0.3s' }}
                        onMouseOver={(e) => {e.target.style.boxShadow = '0 0 15px var(--neon-cyan)'; e.target.style.transform = 'translateY(-2px)'}}
                        onMouseOut={(e) => {e.target.style.boxShadow = 'none'; e.target.style.transform = 'translateY(0)'}}
                    >
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Skills;
