import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Youtube, Facebook, Instagram, Music } from 'lucide-react';
import PodcastPlayer from './PodcastPlayer'; // New component for the podcast logic
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg">
                <div className="hero-blob blob-1"></div>
                <div className="hero-blob blob-2"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        👋 Welcome to my world
                    </motion.div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Vinay Kumar Mahato</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        Java Full Stack Architect | AI Innovator | Global Educator
                    </h2>

                    <p className="hero-description">
                        🚀 Founder & CEO @ Inoglle Technologies | 👨‍🏫 ADV Indian Coder (500K+ learners) <br />
                        Transforming ideas into scalable solutions and shaping the next generation of tech leaders.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <a href="#contact" className="btn-secondary">Contact Me</a>
                    </div>

                    <div className="social-links">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon">
                            <Youtube size={24} />
                        </a>
                        <a href="mailto:email@example.com" className="social-icon">
                            <Mail size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                            <Instagram size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="image-container glass-panel">
                        <img src="/img/pro.jpg" alt="Vinay Kumar Mahato" className="hero-image" />
                        <div className="floating-badge badge-1">
                            <span>500K+</span>
                            <small>Learners</small>
                        </div>
                        <div className="floating-badge badge-2">
                            <span>CEO</span>
                            <small>Inoglle</small>
                        </div>
                    </div>
                </motion.div>
            </div>

            <PodcastPlayer />
        </section>
    );
};

export default Hero;
