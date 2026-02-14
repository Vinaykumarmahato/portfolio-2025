import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import './FitnessOverview.css';

const FitnessOverview = () => {
    return (
        <section id="fitness" className="fitness-overview-section">
            <div className="container fitness-content">
                <motion.div
                    className="fitness-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="fitness-title">
                        <Dumbbell className="fitness-icon" /> Fitness Lifestyle
                    </h2>
                    <p>
                        Stay fit. Stay strong. 💪 Explore my fitness journey, routines, diet tips, and transformation.
                    </p>
                    <Link to="/fitness" className="btn-primary fitness-btn">
                        Explore My Fitness Journey
                    </Link>
                </motion.div>

                <motion.div
                    className="fitness-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <img src="/img/vinay fitofficial.png" alt="Vinay Fitness" className="fitness-img" />
                </motion.div>
            </div>
        </section>
    );
};

export default FitnessOverview;
