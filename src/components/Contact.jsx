import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Let's Connect & Innovate</h2>
                    <p className="section-subtitle">Reach out for collaborations, questions, or just to say hi.</p>
                </motion.div>

                <div className="contact-container glass-panel">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                        <div className="info-item">
                            <div className="icon-box"><MapPin size={24} /></div>
                            <div>
                                <h4>Location</h4>
                                <p>India</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail size={24} /></div>
                            <div>
                                <h4>Email</h4>
                                <p>vinay@example.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Phone size={24} /></div>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
