import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Webinars from '../components/Webinars';
import Leadership from '../components/Leadership';
import Testimonials from '../components/Testimonials';
import SocialHub from '../components/SocialHub';
import Contact from '../components/Contact';
import CertificatesBanner from '../components/CertificatesBanner';
import FitnessOverview from '../components/FitnessOverview';

const HomePage = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Webinars />
            <CertificatesBanner />
            <Leadership />
            <Testimonials />
            <SocialHub />
            <FitnessOverview />
            <Contact />
        </div>
    );
};

export default HomePage;
