import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    { name: "Gayatri Samal", role: "Infosys", quote: "Vinay Kumar developed an exceptional e-commerce platform for us using Java...", image: "/Testmonials/Gayatri.png" },
    { name: "Ahila Mam", role: "Assistant Professor, DSCET", quote: "Vinay Kumar excels in Java, Spring, and Hibernate, showcasing leadership and innovation.", image: "/Testmonials/Ahilya mam.png" },
    { name: "Sujatha Mam", role: "Professor, Agni Engineering College", quote: "Vinay Kumar's analytical skills are exceptional. He breaks down complex problems expertly.", image: "/Testmonials/Sujata mam.jpg" },
    { name: "John Petter", role: "Professor, DSCET", quote: "Vinay’s dedication to his studies and projects is admirable. A true tech enthusiast.", image: "/Testmonials/John peter sir.jpg" },
    { name: "Monika", role: "Assistant Professor, Anna University", quote: "Vinay's teaching style is engaging. I’ve gained invaluable Java and DBMS skills from him.", image: "/Testmonials/Monika mam.jpg" },
    { name: "Ajitha Mam", role: "Professor, DSCET", quote: "Vinay led our team through a challenging project, delivering high-quality results.", image: "/Testmonials/Ajitha mam.jpg" },
    { name: "Jaypriya Mam", role: "Professor, DSCET", quote: "Vinay Kumar's passion for technology is unmatched. He adopts the latest tech quickly.", image: "/Testmonials/Jaypriya mam.jpg" },
    { name: "Savithri Mam", role: "Professor, DSCET", quote: "Vinay’s code is clean, efficient, and well-documented. A pleasure to work with.", image: "/Testmonials/Savitri mam.jpg" },
    { name: "Varalakshmi Mam", role: "Professor, DSCET", quote: "His MySQL work shows a deep understanding of database theory and practice.", image: "/Testmonials/Varalakshmi Mam.jpg" },
    { name: "Deepa Mam", role: "Professor, DSCET", quote: "Vinay Kumar’s passion for learning is unmatched. He constantly seeks to innovate.", image: "/Testmonials/Deepa mam.png" } // Typo fix potentially
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 350;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Voices of Impact</h2>
                </motion.div>

                <div className="testimonials-wrapper">
                    <button className="scroll-btn left" onClick={() => scroll('left')} aria-label="Scroll left"><ChevronLeft /></button>

                    <div className="testimonials-track" ref={scrollRef}>
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card glass-panel"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="quote-icon"><Quote size={32} /></div>
                                <p className="testimonial-text">"{item.quote}"</p>
                                <div className="testimonial-author">
                                    <img src={item.image} alt={item.name} onError={(e) => e.target.src = 'https://via.placeholder.com/50'} />
                                    <div>
                                        <h5>{item.name}</h5>
                                        <small>{item.role}</small>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button className="scroll-btn right" onClick={() => scroll('right')} aria-label="Scroll right"><ChevronRight /></button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
