import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Image as ImageIcon, ExternalLink } from 'lucide-react';
import './CertificatesPage.css';

const certificates = [
    { type: 'image', title: "Java DSA System Design", src: "/img/Certificate/pw java dsa system design course certificate.jpg" },
    { type: 'image', title: "DevOps Microsoft", src: "/img/Certificate/DevOps Certificate Microsoft.jpg" },
    { type: 'image', title: "Java Programming", src: "/img/Certificate/Java Programming Certificate Great Learning.jpg" },
    { type: 'image', title: "Gen AI Certificate", src: "/img/Certificate/next wave Gen Ai Certificate.jpg" },
    { type: 'image', title: "Ethical Hacking", src: "/img/Certificate/Introduction to Ethical Hacking Certificate.jpg" },
    { type: 'image', title: "SQL LearnTube", src: "/img/Certificate/SQL LearnTube Certificate.jpg" },
    { type: 'pdf', title: "Full Stack TechSaksham", src: "/img/Certificate/Full Stack Web Development certification course offered by TechSaksham.pdf" },
    { type: 'pdf', title: "Oracle Cloud Computing", src: "/img/Certificate/Oracle Cloud Computing Certificate.pdf" },
    { type: 'pdf', title: "Microsoft AI Concepts", src: "/img/Certificate/Fundamental AI Concepts Microsoft.pdf" },
    { type: 'pdf', title: "Back-End PW Skills", src: "/img/Certificate/Back-End Development Course PW Skills.pdf" },
    { type: 'pdf', title: "IBM Internship", src: "/img/Certificate/IBM Internship Offer Letter By Edunet.pdf" },
    { type: 'pdf', title: "Azure OpenAI", src: "/img/Certificate/Build natural language solutions with Azure OpenAI Service Microsoft.pdf" }
];

const CertificatesPage = () => {
    return (
        <section className="certificates-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="section-title">My Certifications</h1>
                    <p className="section-subtitle">A collection of my professional achievements and continuous learning journey.</p>
                </motion.div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card glass-panel"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="cert-preview">
                                {cert.type === 'image' ? (
                                    <img src={cert.src} alt={cert.title} loading="lazy" />
                                ) : (
                                    <div className="pdf-placeholder">
                                        <FileText size={48} className="pdf-icon" />
                                        <span>PDF Document</span>
                                    </div>
                                )}
                                <div className="cert-overlay">
                                    <a href={cert.src} target="_blank" rel="noopener noreferrer" className="view-btn">
                                        View <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <div className="cert-badge">{cert.type === 'image' ? 'Certificate' : 'Document'}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesPage;
