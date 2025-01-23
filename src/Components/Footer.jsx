import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© copyright 2025 DMA. Site by Brainvoice</p>
        <div className="social-icons">
          <a href="https://wa.me/+919944942933" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp icon"></i>
          </a>
          <a href="https://www.instagram.com/brainvoice.ai/?igsh=emFweTc5MGZ6bnBu#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram icon"></i>
          </a>
          <a href="https://www.linkedin.com/company/brainvoice-ai/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
