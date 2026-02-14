import React from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Monitor } from 'lucide-react';
import './Webinars.css';

const services = [
    {
        title: "Invite Me as a Speaker",
        description: "Founder of Inoglle, ADV Indian Coder; tech & career insight.",
        price: "₹6,000",
        originalPrice: "₹20,000",
        type: "Video meeting • 15 mins",
        tag: "Popular",
        image: "/img/Webinar%20Image/Invite%20Guest%20Lecture.png",
        link: "https://topmate.io/vinaykumar"
    },
    {
        title: "Java Developer's Guide",
        description: "Master Java with free resources for all skill levels.",
        price: "₹99",
        originalPrice: "₹999",
        type: "Video meeting • 45 mins",
        image: "/img/Webinar%20Image/Java%20Developer%20Guide.png",
        link: "https://topmate.io/vinaykumar"
    },
    {
        title: "GitHub Profile Optimization",
        description: "Build and optimize your GitHub profile for career success.",
        price: "₹79",
        originalPrice: "₹479",
        type: "Video meeting • 45 mins",
        rating: 5.0,
        image: "/img/Webinar%20Image/Github%20Profile%20Optimisation.png",
        link: "https://topmate.io/vinaykumar"
    },
    {
        title: "DSA Preparation Guide",
        description: "Prepare for DSA with comprehensive guide.",
        price: "₹99",
        originalPrice: "₹999",
        type: "Video meeting • 30 mins",
        tag: "Popular",
        rating: 5.0,
        image: "/img/Webinar%20Image/DSA%20Perpration%20Guide.png",
        link: "https://topmate.io/vinaykumar"
    },
    {
        title: "1:1 Mentorship",
        description: "Book a call for interview prep: Ace it with practical tips.",
        price: "₹99",
        originalPrice: "₹499",
        type: "Video meeting • 30 mins",
        rating: 5.0,
        image: "/img/Webinar%20Image/1%20to%201%20Mentorship.png",
        link: "https://topmate.io/vinaykumar"
    },
    {
        title: "Career Guidance",
        description: "Get expert tips to explore career paths and make choices.",
        price: "₹199",
        originalPrice: "₹499",
        type: "Video meeting • 30 mins",
        rating: 5.0,
        image: "/img/Webinar%20Image/Career%20Guidance.png",
        link: "https://topmate.io/vinaykumar"
    },
    {
        title: "LinkedIn Profile Review",
        description: "Learn to create and optimize a standout LinkedIn profile.",
        price: "₹99",
        originalPrice: "₹479",
        type: "Video meeting • 30 mins",
        rating: 5.0,
        image: "/img/Webinar%20Image/Linkedin%20Profile%20Optimisation.png",
        link: "https://topmate.io/vinaykumar"
    },
    {
        title: "Remote Job Strategy",
        description: "All About How To Crack Remote Job As A Fresher.",
        price: "₹199",
        originalPrice: "₹999",
        type: "Video meeting • 15 mins",
        rating: 5.0,
        image: "/img/Webinar%20Image/How%20to%20crack%20Remote%20Job.png",
        link: "https://topmate.io/vinaykumar"
    },
    {
        title: "ATS Resume Review",
        description: "ATS-Friendly Resume Review (90+ ATS Score).",
        price: "₹299",
        originalPrice: "₹499",
        type: "Priority DM • 1 day reply",
        rating: 4.7,
        image: "/img/Webinar%20Image/ATS%20resume%20Review.png",
        link: "https://topmate.io/vinaykumar"
    },
    {
        title: "Free Calls & Msg",
        description: "Reach out for free calls and messages.",
        price: "FREE",
        type: "Priority DM",
        image: "/img/Webinar%20Image/Free%20Call%20Message.png",
        link: "https://topmate.io/vinaykumar"
    }
];

const Webinars = () => {
    return (
        <section id="webinars" className="webinars-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Mentorship & Workshops</h2>
                    <p className="section-subtitle">Connect, learn, and grow with expert guidance.</p>
                </motion.div>

                <div className="webinars-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="webinar-card glass-panel"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="webinar-image">
                                <img src={service.image} alt={service.title} onError={(e) => e.target.src = '/img/logo.png'} />
                                {service.tag && <div className="service-tag">{service.tag}</div>}
                                <div className="webinar-overlay">
                                    <a href={service.link} target="_blank" rel="noreferrer" className="register-btn">Book Now</a>
                                </div>
                            </div>
                            <div className="webinar-content">
                                <h3>{service.title}</h3>
                                <p className="service-desc">{service.description}</p>

                                <div className="service-meta">
                                    <span className="service-type"><Video size={14} /> {service.type}</span>
                                    {service.rating && <span className="service-rating">★ {service.rating}</span>}
                                </div>

                                <div className="service-footer">
                                    <div className="service-price">
                                        <span className="current-price">{service.price}</span>
                                        {service.originalPrice && <span className="original-price">{service.originalPrice}</span>}
                                    </div>
                                    <a href={service.link} target="_blank" rel="noreferrer" className="book-btn-small">Book</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Webinars;
