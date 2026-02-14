import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Download, PlayCircle, Github, Linkedin, Mail } from 'lucide-react';
import PodcastPlayer from './PodcastPlayer';
import './Hero.css';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 25,
                y: (e.clientY - window.innerHeight / 2) / 25,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="hero" className="hero-matrix">
            <div className="hero-overlay"></div>

            <div className="container hero-content-wrapper">
                <motion.div
                    className="hero-text-area"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cyber-badge">
                        <span className="blink-dot"></span> SYSTEM ONLINE
                    </div>

                    <h1 className="glitch-title">
                        VINAY KUMAR <br />
                        <span className="hollow-text">MAHATO</span>
                    </h1>

                    <h2 className="hero-role">
                        I am a <span className="typewriter-text">
                            <Typewriter
                                words={['Java Full Stack Architect', 'AI Innovator', 'Global Educator', 'Founder @ Inoglle']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>

                    <p className="hero-bio">
                        Architecting the future with scalable code and AI-driven solutions.
                        Empowering <strong>500K+ learners</strong> worldwide while building the next generation of tech at <strong>Inoglle Technologies</strong>.
                    </p>

                    <div className="hero-cta-group">
                        <a href="#projects" className="btn-primary cyber-btn">
                            Explore Work <ArrowRight className="icon-pulse" size={20} />
                        </a>
                        <a href="/Software%20Engineer%20Resume%20for%20Portfolio.pdf" target="_blank" className="btn-secondary cyber-btn-outline">
                            Download CV <Download size={20} />
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/Vinaykumarmahato" target="_blank" className="social-glitch"><Github /></a>
                        <a href="https://www.linkedin.com/in/vinay-kumar860964/" target="_blank" className="social-glitch"><Linkedin /></a>
                        <a href="mailto:vinaykumar860964@gmail.com" className="social-glitch"><Mail /></a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual-area"
                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="holo-card">
                        <div className="scan-line"></div>
                        <img src="/img/pro.png" alt="Vinay Kumar - Hologram" className="hero-img" />

                        <div className="floating-stat stat-1 glass-panel">
                            <strong>500K+</strong> <small>Learners</small>
                        </div>
                        <div className="floating-stat stat-2 glass-panel">
                            <strong>CEO</strong> <small>Inoglle</small>
                        </div>

                        <div className="tech-ring"></div>
                        <div className="tech-ring-2"></div>
                    </div>
                </motion.div>
            </div>

            <PodcastPlayer />
        </section>
    );
};

export default Hero;
