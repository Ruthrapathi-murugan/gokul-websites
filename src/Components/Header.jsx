import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for header styles
import headerImage from '../assets/home.jpg';
import logo from '../assets/Final logo.jpg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav>
                <img src={logo} alt="Logo" className="logo" />
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                    <li><a href="home">Home</a></li>
                    <li><a href="studio">Studio</a></li>
                    <li><a href="project">Project</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
