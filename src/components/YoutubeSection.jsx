import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, PlayCircle, Clock } from 'lucide-react';
import './YoutubeSection.css';

const playlists = [
    {
        title: "Java Full Course 2026",
        desc: "Zero to Deployed | Project-Based Learning in Hinglish",
        image: "https://placehold.co/600x400/1a1a2e/00f3ff?text=Java+Full+Course&font=Montserrat",
        link: "https://www.youtube.com/playlist?list=PLqN7GE5f0u-8HJj1ZU5ncLMv_ZHXCdPhO",
        duration: "29+ Videos",
        category: "Full Course"
    },
    {
        title: "Git & GitHub Full Course",
        desc: "No Command Line | GitHub Desktop Complete Tutorial",
        image: "https://img.youtube.com/vi/jkmwed5GHho/hqdefault.jpg",
        link: "https://youtu.be/jkmwed5GHho",
        duration: "Full Course",
        category: "Version Control"
    },
    {
        title: "Java Developer Roadmap 2026",
        desc: "Complete Step-by-Step Guide for Freshers.",
        image: "https://img.youtube.com/vi/xRF7ecu9xwY/hqdefault.jpg",
        link: "https://youtu.be/xRF7ecu9xwY",
        duration: "23:26",
        category: "Roadmap 2026"
    },
    {
        title: "Can't Solve LeetCode? Fix Your Logic",
        desc: "Programming Logic First (Java Beginners).",
        image: "https://img.youtube.com/vi/GN1-CYLNcTQ/hqdefault.jpg",
        link: "https://youtu.be/GN1-CYLNcTQ",
        duration: "9:09",
        category: "Problem Solving"
    },
    {
        title: "Study Mistake (90% Fail Here)",
        desc: "Don't Trust Views (WRONG VIDEO!) - Reality check.",
        image: "https://img.youtube.com/vi/B_AJ01MTK2s/hqdefault.jpg",
        link: "https://youtu.be/B_AJ01MTK2s",
        duration: "12:54",
        category: "Tech Reality"
    },
    {
        title: "No Interview? Fix Your GitHub Profile",
        desc: "2026 Step-by-Step Guide to building your Github.",
        image: "https://img.youtube.com/vi/81tyBnxODyU/hqdefault.jpg",
        link: "https://youtu.be/81tyBnxODyU",
        duration: "16:10",
        category: "Career Guide"
    },
    {
        title: "Engineering in India Is a Trap 😳",
        desc: "No One Talks About This! College reality vs Expectations.",
        image: "https://img.youtube.com/vi/NFhKdwdBvyw/hqdefault.jpg",
        link: "https://youtu.be/NFhKdwdBvyw",
        duration: "13:48",
        category: "Career Truths"
    },
    {
        title: "ATS Friendly Resume",
        desc: "Step-by-step guide to bypass ATS tracking.",
        image: "https://img.youtube.com/vi/yIahHYjkIjs/hqdefault.jpg",
        link: "https://youtu.be/yIahHYjkIjs",
        duration: "Resume Tips",
        category: "Career Guide"
    },
    {
        title: "Professional LinkedIn Account",
        desc: "Build a top 1% LinkedIn profile for developers.",
        image: "https://img.youtube.com/vi/2DwvB9gsVw0/hqdefault.jpg",
        link: "https://youtu.be/2DwvB9gsVw0",
        duration: "LinkedIn",
        category: "Career Guide"
    },
    {
        title: "Data Analyst Roadmap",
        desc: "Complete guide to becoming a Data Analyst.",
        image: "https://img.youtube.com/vi/SQ5molhb4GY/hqdefault.jpg",
        link: "https://youtu.be/SQ5molhb4GY",
        duration: "Roadmap",
        category: "Data Science"
    },
    {
        title: "Become the Top 1%",
        desc: "Actionable steps to elevate your tech career.",
        image: "https://img.youtube.com/vi/XuyH-f-0-_8/hqdefault.jpg",
        link: "https://youtu.be/XuyH-f-0-_8",
        duration: "Motivation",
        category: "Self-Improvement"
    },
    {
        title: "GSoC Roadmap",
        desc: "How to crack Google Summer of Code.",
        image: "https://img.youtube.com/vi/QQvae70PC_k/hqdefault.jpg",
        link: "https://youtu.be/QQvae70PC_k",
        duration: "Open Source",
        category: "GSoC"
    }
];

const YoutubeSection = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedPlaylists = showAll ? playlists : playlists.slice(0, 3);

    return (
        <section id="youtube" className="youtube-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        <Youtube className="yt-icon-title" size={40} />
                        ADV Indian Coder
                    </h2>
                    <p className="section-subtitle">Democratizing Tech Education | 406+ Subscribers</p>
                </motion.div>

                <motion.div 
                    className="youtube-banner-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    {/* If banner image is available it will load, otherwise fallback gradient shows */}
                    <div style={{width: '100%', height: '250px', background: 'linear-gradient(45deg, #2a0845, #6441A5)'}}></div>
                    <div className="banner-overlay">
                        <div className="banner-info">
                            <h3>Code Karein. Build Karein. Deploy Karein.</h3>
                            <p>Java Full Stack | Python | Web Development | DSA</p>
                        </div>
                        <a href="https://www.youtube.com/@ADVIndianCoder" target="_blank" rel="noopener noreferrer" className="yt-subscribe-btn">
                            <Youtube size={20} /> Subscribe Channel
                        </a>
                    </div>
                </motion.div>

                <div className="playlist-grid">
                    {displayedPlaylists.map((playlist, index) => (
                        <motion.div
                            key={index}
                            className="yt-video-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => window.open(playlist.link, '_blank')}
                        >
                            <div className="video-thumbnail">
                                <div className="play-overlay">
                                    <PlayCircle />
                                </div>
                            </div>
                            <div className="video-info">
                                <h4 className="video-title">{playlist.title}</h4>
                                <p className="video-desc">{playlist.desc}</p>
                                <div className="video-stats">
                                    <span style={{color: 'var(--neon-cyan)', marginRight: '1rem', fontWeight: 'bold'}}>{playlist.category}</span>
                                    <span><Clock size={14} style={{verticalAlign: 'middle', marginRight: '4px'}}/> {playlist.duration}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button 
                        className="yt-subscribe-btn" 
                        onClick={() => setShowAll(!showAll)}
                        style={{ cursor: 'pointer', border: 'none', fontSize: '1.1rem', padding: '1rem 3rem' }}
                    >
                        {showAll ? 'Show Less' : 'Watch More'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default YoutubeSection;
