import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleTheme = () => {
        // For now, only 'dark' is fully styled in index.css, 
        // but we can add light mode class to body later.
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.classList.toggle('light-mode');
    };

    // Handling anchor links if on home page
    const scrollToSection = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') return; // Let Link handle it if navigating

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', path: '/', id: 'home' },
        { name: 'About', path: '/#about', id: 'about' },
        { name: 'Skills', path: '/#skills', id: 'skills' },
        { name: 'Projects', path: '/#projects', id: 'projects' },
        { name: 'Experience', path: '/#experience', id: 'experience' },
        { name: 'Contact', path: '/#contact', id: 'contact' },
        { name: 'Certificates', path: '/certificates', isPage: true }, // Dedicated Page
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="brand-logo" onClick={() => window.scrollTo(0, 0)}>
                    <span className="gradient-text">Vinay Kumar</span>
                </Link>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        link.isPage ? (
                            <Link key={link.name} to={link.path} className="nav-link">
                                {link.name}
                            </Link>
                        ) : (
                            // Use anchor if on home page, or Link with hash if elsewhere
                            location.pathname === '/' ? (
                                <a
                                    key={link.name}
                                    href={`#${link.id}`}
                                    className="nav-link"
                                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link key={link.name} to={`/#${link.id}`} className="nav-link">
                                    {link.name}
                                </Link>
                            )
                        )
                    ))}

                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <div className="mobile-actions">
                    <button className="theme-toggle mobile-theme" onClick={toggleTheme}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="mobile-menu glass-panel">
                    {navLinks.map((link) => (
                        link.isPage ? (
                            <Link key={link.name} to={link.path} className="mobile-link" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </Link>
                        ) : (
                            location.pathname === '/' ? (
                                <a
                                    key={link.name}
                                    href={`#${link.id}`}
                                    className="mobile-link"
                                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link key={link.name} to={`/#${link.id}`} className="mobile-link" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </Link>
                            )
                        )
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
