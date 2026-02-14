import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Youtube, Instagram, Facebook, Mail, Twitter } from 'lucide-react';
import './SocialHub.css';

const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin />, url: "https://www.linkedin.com/in/vinay-kumar860964/", color: "#0077b5" },
    { name: "GitHub", icon: <Github />, url: "https://github.com/Vinaykumarmahato", color: "#333" },
    { name: "YouTube", icon: <Youtube />, url: "https://www.youtube.com/@ADVIndianCoder-i9y", color: "#ff0000" },
    { name: "Instagram", icon: <Instagram />, url: "https://www.instagram.com/vinay_software_engineer/", color: "#c13584" },
    { name: "Facebook", icon: <Facebook />, url: "https://www.facebook.com/vinay.software.engineer", color: "#1877f2" },
    { name: "Topmate", icon: <span style={{ fontSize: '1.2rem' }}>🤝</span>, url: "https://topmate.io/vinaykumar", color: "#00aaff" },
    { name: "Email", icon: <Mail />, url: "mailto:vinaykumar860964@gmail.com", color: "#ea4335" }
];

const SocialHub = () => {
    return (
        <section id="social-hub" className="social-hub-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My Digital Footprint</h2>
                    <p className="section-subtitle">Connect with me across platforms.</p>
                </motion.div>

                <div className="social-grid">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn glass-panel"
                            whileHover={{ scale: 1.1, backgroundColor: link.color, color: '#fff', borderColor: link.color }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <span className="social-icon-wrapper">{link.icon}</span>
                            <span>{link.name}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialHub;
