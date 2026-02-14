import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Cpu, Code, User, Send, Award, Activity, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const navItems = [
    { name: 'Home', path: '/', id: 'hero', icon: <Zap size={18} /> },
    { name: 'About', path: '/#about', id: 'about', icon: <User size={18} /> },
    { name: 'Skills', path: '/#skills', id: 'skills', icon: <Cpu size={18} /> },
    { name: 'Projects', path: '/#projects', id: 'projects', icon: <Code size={18} /> },
    { name: 'Experience', path: '/#experience', id: 'experience', icon: <Award size={18} /> }, /* Fallback to Award */
    { name: 'Webinars', path: '/#webinars', id: 'webinars', icon: <Activity size={18} /> }, /* Fallback to Activity */
    { name: 'Certificates', path: '/certificates', isPage: true, icon: <Award size={18} /> },
    { name: 'Fitness', path: '/fitness', isPage: true, icon: <Activity size={18} /> },
    { name: 'Contact', path: '/#contact', id: 'contact', icon: <Send size={18} /> },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const location = useLocation();

    // Theme Toggle State
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Scroll Spy Logic for Home Page
            if (location.pathname === '/') {
                const sections = navItems.filter(item => !item.isPage).map(item => item.id);

                // Find the current section
                let current = '';
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // If the top of the section is within the viewport (with some offset)
                        if (rect.top <= 150 && rect.bottom >= 150) {
                            current = section;
                        }
                    }
                }
                if (current) setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    // Handle scroll lock when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollTo = (id) => {
        if (location.pathname !== '/') {
            // navigation handled by Link to="/#id", browser might handle jump
            // but for smooth scroll after navigation we might need a timeout
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "instant"
                });
            }
        }
        setActiveSection(id);
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav
                className={`cyber-navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <div className="nav-container nav-glass-panel">
                    <Link to="/" className="nav-logo" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection('hero'); }}>
                        <span className="logo-glitch" data-text="VINAY">VINAY</span>
                        <span className="logo-accent">.DEV</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="nav-desktop">
                        {navItems.map((item) => (
                            <li key={item.name} className={activeSection === item.id ? 'active' : ''}>
                                {item.isPage ? (
                                    <Link
                                        to={item.path}
                                        className="nav-link"
                                        onClick={() => setActiveSection('')} // Clear active section for other pages
                                    >
                                        {item.icon} <span className="link-text">{item.name}</span>
                                    </Link>
                                ) : (
                                    location.pathname === '/' ? (
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                        >
                                            {item.icon} <span className="link-text">{item.name}</span>
                                            {activeSection === item.id && (
                                                <motion.div layoutId="underline" className="nav-glow-line" />
                                            )}
                                        </a>
                                    ) : (
                                        <Link to={`/#${item.id}`} className="nav-link">
                                            {item.icon} <span className="link-text">{item.name}</span>
                                        </Link>
                                    )
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="nav-controls" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle"
                            aria-label="Toggle Theme"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--neon-cyan)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        </button>

                        {/* Mobile Toggle */}
                        <div
                            className="nav-mobile-toggle"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Navigation"
                        >
                            {isOpen ? <X color="var(--neon-pink)" size={28} /> : <Menu color="var(--neon-cyan)" size={28} />}
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mobile-links">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.1 }}
                                >
                                    {item.isPage ? (
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className="mobile-link"
                                        >
                                            {item.icon} {item.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                                            className="mobile-link"
                                        >
                                            {item.icon} {item.name}
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
