import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© copyright 2025 DMA. Site by Brainvoice</p>
        <div className="social-icons">
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp icon"></i>
          </a>
          <a href="https://www.instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
