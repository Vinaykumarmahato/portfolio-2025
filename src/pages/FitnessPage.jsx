import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Heart, Activity } from 'lucide-react';
import './FitnessPage.css';

const FitnessPage = () => {
    return (
        <section className="fitness-page">
            <div className="container">
                <motion.div
                    className="fitness-hero"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="fitness-text-content">
                        <h1>Fitness & Discipline</h1>
                        <p>Tech feeds the mind. Fitness fuels the soul. My journey to physical excellence.</p>

                        <div className="fitness-stats">
                            <div className="stat-box">
                                <Activity />
                                <span>Consistency</span>
                            </div>
                            <div className="stat-box">
                                <Dumbbell />
                                <span>Strength</span>
                            </div>
                            <div className="stat-box">
                                <Heart />
                                <span>Health</span>
                            </div>
                        </div>
                    </div>
                    <div className="fitness-hero-img">
                        <img src="/img/vinay fitofficial.png" alt="Vinay Fitness" />
                    </div>
                </motion.div>

                <div className="fitness-gallery">
                    <motion.div className="gallery-item" whileHover={{ scale: 1.02 }}>
                        <img src="/img/Fitness home.png" alt="Fitness Routine" />
                    </motion.div>
                    <motion.div className="gallery-item" whileHover={{ scale: 1.02 }}>
                        {/* Placeholder or another image if available */}
                        <div className="quote-card glass-panel">
                            <h3>"The only bad workout is the one that didn't happen."</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FitnessPage;
