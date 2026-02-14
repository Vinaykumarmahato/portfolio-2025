import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, User, Zap, Database, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: <BookOpen />,
            title: "Education",
            desc: "B.Tech in Information Technology, Anna University (2021–2025)"
        },
        {
            icon: <User />,
            title: "Current Roles",
            desc: "CEO @ Inoglle | Tech Lead @ ADV SparkTech | Educator @ ADV Indian Coder"
        },
        {
            icon: <Code />,
            title: "Core Skills",
            desc: "Java, Spring Boot, REST API, Hibernate, MySQL, Git, JavaScript, Full-Stack Engineering"
        },
        {
            icon: <Zap />,
            title: "Achievements",
            desc: "40% delivery efficiency increase, 25% client scalability improvement, 20+ internships"
        },
        {
            icon: <Terminal />,
            title: "Mission",
            desc: "To empower 10M+ learners and become a top 1% global innovator by 2030."
        }
    ];

    const repos = [
        { title: "Java Fundamentals", name: "Java_Basics_Exploration_Revision", url: "https://github.com/Vinaykumarmahato/Java_Basics_Exploration_Revision" },
        { title: "MySQL Masterclass", name: "MySQL_Zero_to_Hero", url: "https://github.com/Vinaykumarmahato/MySQL_Zero_to_Hero" },
        { title: "Java Collections Deep Dive", name: "Java-Collection-Framework-Exploration", url: "https://github.com/Vinaykumarmahato/Java-Collection-Framework-Exploration" },
        { title: "OOP Fortress", name: "OOP_Fortress_Exploration_Revision", url: "https://github.com/Vinaykumarmahato/OOP_Fortress_Exploration_Revision" },
        { title: "Java Interview Prep", name: "Crack-Java-Interviews", url: "https://github.com/Vinaykumarmahato/Crack-Java-Interviews" },
        { title: "Google OA Solutions", name: "Google-Online-Assessment-Solution", url: "https://github.com/Vinaykumarmahato/Google-Online-Assessment-Solution-in-java" }
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me: Pioneering Tech, Fitness & Impact
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text glass-panel"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I’m <strong>Vinay Kumar Mahato</strong>, a passionate technologist, innovator, and educator, dedicated to solving real-world problems through smart, scalable tech solutions. As the <strong>Founder & CEO of Inoglle</strong>, I lead impactful digital transformation using full-stack development, AI, and IT consulting. I’m also committed to shaping the next generation of tech leaders through my platform <strong>ADV Indian Coder</strong>.
                        </p>
                        <br />
                        <p>
                            After successfully reaching thousands through my original YouTube channel, I’ve made a bold decision to start fresh. My <strong>new YouTube journey</strong> has just begun — with a sharper focus, clearer content strategy, and an unwavering goal: to deliver high-quality, fast-paced tutorials that empower learners worldwide.
                        </p>
                    </motion.div>

                    <div className="about-highlights">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                className="highlight-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="highlight-icon">{item.icon}</div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="about-repos">
                    <h3>📚 Explore My GitHub Learning Repositories</h3>
                    <div className="repo-grid">
                        {repos.map((repo, index) => (
                            <motion.a
                                key={index}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="repo-card glass-panel"
                                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                            >
                                <Database size={24} className="github-icon" />
                                <div>
                                    <h4>{repo.title}</h4>
                                    <small>{repo.name}</small>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
