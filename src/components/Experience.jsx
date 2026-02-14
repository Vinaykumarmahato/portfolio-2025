import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import './Experience.css';

const experienceData = [
    {
        role: "Founder & CEO",
        company: "Inoglle Technologies",
        period: "Feb 2024 – Present",
        desc: "Leading full-stack development & IT consulting. Improved client scalability by 25%. Launched internship programs for 100+ learners."
    },
    {
        role: "Technical Lead",
        company: "ADV SparkTech (GDSC Chapter)",
        period: "Jan 2024 – Present",
        desc: "Organized 10+ workshops, guided 500+ students in real-world projects, led career mentoring sessions."
    },
    {
        role: "Founder & Educator",
        company: "ADV Indian Coder",
        period: "Jan 2022 – Present",
        desc: "Created 150+ tutorials, 50K+ subscribers, helping 2000+ learners get certified."
    },
    {
        role: "Director",
        company: "ADV HopeHaven (NGO)",
        period: "Jan 2024 – Aug 2024",
        desc: "Led 50+ outreach programs impacting 10,000+ lives. Built national volunteer network."
    },
    {
        role: "Freelance Developer",
        company: "Upwork",
        period: "Dec 2023 – May 2024",
        desc: "Authored 50+ technical articles, developed full-stack apps for global clients."
    },
    {
        role: "Java Developer Intern",
        company: "PW Skills, InternBug, LetsGrowMore",
        period: "Feb 2023 – Aug 2023",
        desc: "Developed scalable Java apps, collaborated in Agile environments."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Professional Journey</h2>
                </motion.div>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-panel">
                                <span className="timeline-date"><Calendar size={14} /> {item.period}</span>
                                <h3>{item.role}</h3>
                                <h4>{item.company}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
