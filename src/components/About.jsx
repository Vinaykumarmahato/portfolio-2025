import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, User, Zap, Database, Terminal, Cpu, Globe } from 'lucide-react';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: <BookOpen />,
            title: "ACADEMIC CORE",
            subtitle: "B.Tech Information Technology",
            desc: "Anna University (2021–2025)",
            color: "var(--neon-purple)"
        },
        {
            icon: <User />,
            title: "CURRENT STATUS",
            subtitle: "Founder & CEO @ Inoglle",
            desc: "Leading digital transformation & AI solutions.",
            color: "var(--neon-cyan)"
        },
        {
            icon: <Code />,
            title: "TECH STACK",
            subtitle: "Full Stack Architect",
            desc: "Java, Spring Boot, React, AWS, Docker.",
            color: "var(--neon-green)"
        },
        {
            icon: <Zap />,
            title: "IMPACT METRICS",
            subtitle: "Scalability & Efficiency",
            desc: "40% delivery speed boost, 500K+ learners.",
            color: "var(--neon-pink)"
        }
    ];

    const repos = [
        { title: "Java Core", name: "Java_Basics_Exploration", url: "https://github.com/Vinaykumarmahato/Java_Basics_Exploration_Revision", icon: <CoffeeIcon /> },
        { title: "MySQL Mastery", name: "MySQL_Zero_to_Hero", url: "https://github.com/Vinaykumarmahato/MySQL_Zero_to_Hero", icon: <Database /> },
        { title: "Structures", name: "Java-Collection-Framework", url: "https://github.com/Vinaykumarmahato/Java-Collection-Framework-Exploration", icon: <LayersIcon /> },
        { title: "System Design", name: "OOP_Fortress_Revision", url: "https://github.com/Vinaykumarmahato/OOP_Fortress_Exploration_Revision", icon: <Cpu /> },
        { title: "Interview Prep", name: "Crack-Java-Interviews", url: "https://github.com/Vinaykumarmahato/Crack-Java-Interviews", icon: <Terminal /> },
        { title: "Algorithms", name: "Google-Online-Assessment", url: "https://github.com/Vinaykumarmahato/Google-Online-Assessment-Solution-in-java", icon: <Code /> }
    ];

    return (
        <section id="about" className="cyber-about">
            <div className="container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">IDENTITY VERIFIED</h2>
                    <div className="cyber-line"></div>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-bio glass-panel"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bio-header">
                            <span className="bio-label">BIO_DATA_V1.0</span>
                            <div className="bio-dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <p>
                            Initializing <strong>Vinay Kumar Mahato</strong>... <br /><br />
                            A visionary Technologist and Educator architecting the digital future. As the <strong>Founder of Inoglle</strong>, I don't just write code; I build ecosystems that empower businesses and learners alike.
                        </p>
                        <p>
                            My mission is to democratize technology education through <strong>ADV Indian Coder</strong>, bridging the gap between complex algorithms and real-world application. From optimizing enterprise-grade backend systems to mentoring the next wave of developers, I operate at the intersection of innovation and impact.
                        </p>
                        <div className="bio-footer">
                            <span>STATUS: <span className="status-online">ONLINE</span></span>
                            <span>LOC: INDIA</span>
                        </div>
                    </motion.div>

                    <div className="about-cards">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                className="cyber-card glass-panel"
                                style={{ borderLeft: `4px solid ${item.color}` }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                            >
                                <div className="card-icon" style={{ color: item.color }}>{item.icon}</div>
                                <div className="card-content">
                                    <h4>{item.title}</h4>
                                    <h5>{item.subtitle}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="repo-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="section-subtitle"><Terminal className="inline-icon" /> KNOWLEDGE_BASE_REPOSITORIES</h3>
                    <div className="repo-grid-cyber">
                        {repos.map((repo, index) => (
                            <a key={index} href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-chip">
                                <span className="repo-icon">{repo.icon}</span>
                                <span className="repo-name">{repo.title}</span>
                                <span className="repo-arrow">→</span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Simple custom icon components for visual variety
const CoffeeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
);

const LayersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
);

export default About;
