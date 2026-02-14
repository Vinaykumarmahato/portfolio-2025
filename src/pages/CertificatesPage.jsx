import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Image as ImageIcon, ExternalLink } from 'lucide-react';
import './CertificatesPage.css';

const certificates = [
    // Technical & Development
    { type: 'image', title: "Java DSA System Design (PW Skills)", src: "/img/Certificate/pw%20java%20dsa%20system%20design%20course%20certificate.jpg" },
    { type: 'pdf', title: "Full Stack Web Development (TechSaksham)", src: "/img/Certificate/Full%20Stack%20Web%20Development%20certification%20course%20offered%20by%20TechSaksham.pdf" },
    { type: 'pdf', title: "Back-End Development (PW Skills)", src: "/img/Certificate/Back-End%20Development%20Course%20PW%20Skills.pdf" },
    { type: 'image', title: "DevOps Certificate (Microsoft)", src: "/img/Certificate/DevOps%20Certificate%20Microsoft.jpg" },
    { type: 'image', title: "Java Programming (Great Learning)", src: "/img/Certificate/Java%20Programming%20Certificate%20Great%20Learning.jpg" },
    { type: 'image', title: "Data Structures Intermediate (Great Learning)", src: "/img/Certificate/Data%20Structures%20for%20Intermediate%20Level%20Great%20Learning.jpg" },
    { type: 'image', title: "Gen AI Certificate (Next Wave)", src: "/img/Certificate/next%20wave%20Gen%20Ai%20Certificate.jpg" },
    { type: 'image', title: "Ethical Hacking Introduction", src: "/img/Certificate/Introduction%20to%20Ethical%20Hacking%20Certificate.jpg" },
    { type: 'image', title: "SQL LearnTube Certificate", src: "/img/Certificate/SQL%20LearnTube%20Certificate.jpg" },
    { type: 'image', title: "SQL Completion (LearnTube)", src: "/img/Certificate/SQL%20Completion%20Certificate%20LernTube.jpg" },
    { type: 'image', title: "AWS Online Conference", src: "/img/Certificate/AWS%20Online%20Confrence%20Certificate.jpg" },
    { type: 'pdf', title: "Power BI Certificate", src: "/img/Certificate/power%20bi%20certificate.pdf" },

    // Microsoft Cloud & AI
    { type: 'pdf', title: "Azure OpenAI: Natural Language Solutions", src: "/img/Certificate/Build%20natural%20language%20solutions%20with%20Azure%20OpenAI%20Service%20Microsoft.pdf" },
    { type: 'pdf', title: "Azure OpenAI: Apply Prompt Engineering", src: "/img/Certificate/Apply%20prompt%20engineering%20with%20Azure%20OpenAI%20Service%20Microsoft.pdf" },
    { type: 'pdf', title: "Azure OpenAI: Generate Images", src: "/img/Certificate/Generate%20images%20with%20Azure%20OpenAI%20Service%20Microsoft.pdf" },
    { type: 'pdf', title: "Azure OpenAI: Use Your Own Data", src: "/img/Certificate/Use%20your%20own%20data%20with%20Azure%20OpenAI%20Service%20Microsoft.pdf" },
    { type: 'pdf', title: "Fundamental AI Concepts (Microsoft)", src: "/img/Certificate/Fundamental%20AI%20Concepts%20Microsoft.pdf" },
    { type: 'pdf', title: "Responsible Generative AI (Microsoft)", src: "/img/Certificate/Fundamentals%20of%20Responsible%20Generative%20AI%20Microsoft.pdf" },
    { type: 'pdf', title: "Microsoft Copilot Teaching Enhancement", src: "/img/Certificate/Enhance%20teaching%20and%20learning%20with%20Microsoft%20Copilot%20Certificate.pdf" },
    { type: 'pdf', title: "AI ML Certificate (Microsoft/Edunet)", src: "/img/Certificate/AI%20ML%20certificate%20Microsoft%20By%20Edunet.pdf" },
    { type: 'image', title: "Finance & Operations: Data Types (Microsoft)", src: "/img/Certificate/Microsoft%20certificate,%20Build%20Extended%20data%20types%20and%20enumerations%20for%20finance%20and%20operations%20App.jpg" },
    { type: 'image', title: "Finance & Operations: Lifecycle Mgmt (Microsoft)", src: "/img/Certificate/Microsoft%20certificate,%20implementat%20application%20lifecycle%20management%20in%20finance%20and%20operations%20App.jpg" },
    { type: 'image', title: "Microsoft Teams App Creation", src: "/img/Certificate/Create%20interactive%20meeting%20apps%20for%20Microsoft%20Teams%20Certificate.jpg" },
    { type: 'pdf', title: "Microsoft Office 365 (Beginner)", src: "/img/Certificate/Beginner%20Microsoft%20office%20365%20certification!.pdf" },
    { type: 'pdf', title: "Microsoft Office 365 (Advance)", src: "/img/Certificate/Advance%20Microsoft%20office%20365%20certification!.pdf" },

    // Oracle & Cloud
    { type: 'pdf', title: "Oracle Cloud Computing", src: "/img/Certificate/Oracle%20Cloud%20Computing%20Certificate.pdf" },
    { type: 'pdf', title: "Oracle Cloud Infrastructure", src: "/img/Certificate/Oracle%20cloud%20Infrastructure%20Certificate.pdf" },

    // Internships & Offers
    { type: 'pdf', title: "IBM Internship Offer (Edunet)", src: "/img/Certificate/IBM%20Internship%20Offer%20Letter%20By%20Edunet.pdf" },
    { type: 'pdf', title: "CodeSoft Java Internship", src: "/img/Certificate/CodeSoft%20Java%20Programing%20Internship%20Offer%20Letter.pdf" },
    { type: 'pdf', title: "TechnoHack Internship", src: "/img/Certificate/technohack%20EduTech%20Internship%20offer%20letter%20.pdf" },
    { type: 'pdf', title: "OctaNet SW Services Internship", src: "/img/Certificate/OctaNet%20sW%20Services%20Internship%20offer%20letter.pdf" },
    { type: 'pdf', title: "Code Clouse Internship", src: "/img/Certificate/Code%20Clouse%20Internship%20Offer%20Letter.pdf" },
    { type: 'pdf', title: "Oasis InfoByte Internship", src: "/img/Certificate/Oasis%20InfoByte%20Internship%20Offer%20Letter.pdf" },
    { type: 'pdf', title: "Lets Grow More Internship", src: "/img/Certificate/let's%20grow%20more%20Internship%20%20offer%20letter.pdf" },
    { type: 'jpg', title: "InternBug Campus Ambassador", src: "/img/Certificate/Campus%20Ambassador%20Internship%20at%20InternBug%20Certificate.jpg" },
    { type: 'jpg', title: "InternBug Internship Offer", src: "/img/Certificate/Internship%20Offer%20Letter%20at%20InternBug.jpg" },
    { type: 'jpg', title: "Internshala Student Partner", src: "/img/Certificate/Internshala%20Student%20Partner%20Team%20Certificate.jpg" },

    // Workshops, Competitions & Others
    { type: 'pdf', title: "IIT Bombay FOSSEE Mapathon 2023", src: "/img/Certificate/IIT%20Bombay%20FOSSEE%20Mapathon%202023%20Certificate.pdf" },
    { type: 'pdf', title: "Coding Competition Certificate", src: "/img/Certificate/coding%20Competition%20Certificate.pdf" },
    { type: 'pdf', title: "Design Thinking Workshop (Anna Univ)", src: "/img/Certificate/Design%20Thinking%20Worksho%20Rusa%202.0%20Anna%20University%20Certificate.pdf" },
    { type: 'pdf', title: "Lean Six Sigma Yellow Belt", src: "/img/Certificate/Lean%20Six%20Sigma%20Yellow%20Belt%20Certificate.pdf" },
    { type: 'pdf', title: "Emotional Intelligence Development", src: "/img/Certificate/Certificate%20of%20Completion%20Developing%20Your%20Emotional%20Intelligence.pdf" },
    { type: 'image', title: "Mind Luster Communication Skills", src: "/img/Certificate/Mind%20Luster%20Communication%20Skills%20Certificate.jpg" },
    { type: 'pdf', title: "Entrepreneur Day Certificate", src: "/img/Certificate/Vinay%20Entrepreneur%20day%20certificate.pdf" },
    { type: 'image', title: "Data Privacy (Govt of India)", src: "/img/Certificate/certificate%20which%20is%20given%20by%20the%20government%20of%20India%20Data%20Privacy%20Certificate.jpg" },
    { type: 'image', title: "The Spark Foundation", src: "/img/Certificate/The%20Spark%20Foundation%20Certificate.jpg" },
    { type: 'image', title: "Prachar Bharat Certificate", src: "/img/Certificate/Prachar%20Bharat%20Certificate.jpg" },
    { type: 'pdf', title: "Sign Language (SkillsTrainer)", src: "/img/Certificate/SkillsTrainer%20Certificate%20Sign%20Language.pdf" },
    { type: 'pdf', title: "Why Global Services Participation", src: "/img/Certificate/vinay%20Kumar%20Why%20global%20services%20participation%20certificate.pdf" },
    { type: 'pdf', title: "Singing Award Certificate", src: "/img/Certificate/vinay%20Singing%20award%20certificate.pdf" },
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
