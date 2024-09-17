import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a href="https://github.com/shravanbishnoi" className="icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/shravan-bishnoi/" className="icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:shravanbishnoi008754@gmail.com" className="icon">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <p className="footer-text">© 2024 Shravan Bishnoi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
