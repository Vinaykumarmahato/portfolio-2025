import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import './Leadership.css';

const Leadership = () => {
    return (
        <section id="leadership" className="leadership-section">
            <div className="container">
                <motion.div
                    className="leadership-content glass-panel"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="leadership-text">
                        <Youtube size={48} className="yt-icon" />
                        <h2>ADV Indian Coder</h2>
                        <h3>Democratizing Tech Education</h3>
                        <p>
                            🎓 Empowering learners globally with in-depth tutorials on Java, Spring Boot, Microservices,
                            Data Structures & Algorithms, AI/ML Basics, and Blockchain Development.
                        </p>
                        <div className="stats-row">
                            <div className="stat">
                                <strong>500K+</strong> Subscribers
                            </div>
                            <div className="stat">
                                <strong>300+</strong> Tutorials
                            </div>
                            <div className="stat">
                                <strong>10M+</strong> Views
                            </div>
                        </div>
                        <a href="https://www.youtube.com/@ADVIndianCoder-i9y" target="_blank" rel="noopener noreferrer" className="btn-primary yt-btn">
                            Visit Channel
                        </a>
                    </div>
                    {/* Could add video thumbnails here if API available or static */}
                </motion.div>
            </div>
        </section>
    );
};

export default Leadership;
