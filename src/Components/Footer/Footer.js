// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-logo">ApniDukaan</h2>

        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/contactus">Contact</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FakeStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
