import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import './Experience.css';

const experienceData = [
    {
        role: "Founder & CEO",
        company: "Inoglle",
        period: "2024 – Present",
        desc: "Leading full-stack development & IT consulting. Trained 100+ developers and achieved a 40% efficiency improvement."
    },
    {
        role: "Founder",
        company: "ADV HopeHaven",
        period: "2024 – Present",
        desc: "Launched ongoing social initiative that has conducted 50+ programs impacting over 10,000 beneficiaries."
    },
    {
        role: "Java & Web Developer",
        company: "PW Skills, CodeSoft, InternBug, OctaNet",
        period: "2023",
        desc: "Built scalable applications, focused on both robust backend architecture and dynamic frontend interfaces."
    },
    {
        role: "Founder & Creator",
        company: "ADV Indian Coder",
        period: "2022 – Present",
        desc: "Teaching Project-based Java in Hinglish. Launched Java Full Course. Mentored 500+ students & assisted 2,000+ job placements."
    },
    {
        role: "Technical Lead",
        company: "GDSC ADV SparkTech",
        period: "2021",
        desc: "Organized 10+ hackathons and guided 500+ students in real-world projects during BTech at Anna University."
    },
    {
        role: "Educator (Physics & English)",
        company: "Mashrakh, Saran (Bihar)",
        period: "2017",
        desc: "Started teaching at the age of 17, establishing a foundation of making education accessible early on."
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
