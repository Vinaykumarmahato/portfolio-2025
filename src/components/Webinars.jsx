import React from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Monitor } from 'lucide-react';
import './Webinars.css';

const webinars = [
    { title: "ChatGPT Mastery", date: "August 5, 2025", platform: "Zoom", image: "/img/ChatGPT Mastery.png" },
    { title: "LinkedIn & GitHub Branding", date: "August 10, 2025", platform: "Google Meet", image: "/img/LinkedIn & GitHub Profile Webinar.png" },
    { title: "Docker Crash Course", date: "August 15, 2025", platform: "Zoom", image: "/img/Docker Crash Course for Beginners.png" },
    { title: "MySQL Zero to Hero", date: "August 20, 2025", platform: "Google Meet", image: "/img/MySQL Zero to Hero Webinar.png" },
    { title: "Java Basics Bootcamp", date: "August 25-27, 2025", platform: "Zoom", image: "/img/Java Basics Bootcamp.png" }
];

const Webinars = () => {
    return (
        <section id="webinars" className="webinars-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Webinars & Workshops</h2>
                    <p className="section-subtitle">Sharing knowledge and inspiring the next generation.</p>
                </motion.div>

                <div className="webinars-grid">
                    {webinars.map((webinar, index) => (
                        <motion.div
                            key={index}
                            className="webinar-card glass-panel"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="webinar-image">
                                <img src={webinar.image} alt={webinar.title} onError={(e) => e.target.src = 'https://via.placeholder.com/300x180'} />
                                <div className="webinar-overlay">
                                    <button className="register-btn">Register</button>
                                </div>
                            </div>
                            <div className="webinar-content">
                                <h3>{webinar.title}</h3>
                                <div className="webinar-meta">
                                    <span><Calendar size={14} /> {webinar.date}</span>
                                    <span><Monitor size={14} /> {webinar.platform}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Webinars;
