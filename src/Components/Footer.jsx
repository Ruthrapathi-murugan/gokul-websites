import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© copyright 2025 DMA. Site by Brainvoice</p>
        <div className="social-icons">
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
          <a href="https://www.instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
