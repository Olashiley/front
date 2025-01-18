import React from 'react';
import './Footer.css'; // External CSS file
import footerLogo from '../assets/banner.jpeg'; // Path to the footer logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
      </div>
      <p>&copy; 2025 Tech with Kishky. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
