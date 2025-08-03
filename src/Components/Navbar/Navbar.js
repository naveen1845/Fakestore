// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__brand">
        <Link to="/" className="navbar__logo">ApniDukaan</Link>
      </div>

      <nav className={`navbar__links ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
          Products
        </Link>
        <Link to="/aboutus" className={location.pathname === '/aboutus' ? 'active' : ''}>
          About us
        </Link>
        <Link to="/contactus" className={location.pathname === '/contactus' ? 'active' : ''}>
          Contact us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
