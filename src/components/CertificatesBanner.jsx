import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CertificatesBanner.css';

const CertificatesBanner = () => {
    return (
        <section className="certificates-banner">
            <div className="banner-bg"></div>
            <div className="container banner-content">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    Unlock Your Potential: Explore My Certifications!
                </motion.h2>
                <Link to="/certificates" className="banner-btn">
                    OPEN NOW <ArrowRight size={20} />
                </Link>

                <div className="animated-squares">
                    <div className="sq sq-1"></div>
                    <div className="sq sq-2"></div>
                    <div className="sq sq-3"></div>
                </div>
            </div>
        </section>
    );
};

export default CertificatesBanner;
