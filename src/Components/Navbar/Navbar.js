import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__brand">
        <Link to="/" className="navbar__logo">ApniDukaan</Link>
      </div>
      
      <button 
        className="navbar__menu-toggle" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>
      
      <nav className={`navbar__links ${mobileMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          data-text="Home"
          className={location.pathname === '/' ? 'active' : ''}
        >
          Home
        </Link>
        <Link 
          to="/products" 
          data-text="Products"
          className={location.pathname === '/products' ? 'active' : ''}
        >
          Products
        </Link>
        <Link 
          to="/aboutus" 
          data-text="About us"
          className={location.pathname === '/aboutus' ? 'active' : ''}
        >
          About us
        </Link>
        <Link 
          to="/contactus" 
          data-text="Contact us"
          className={location.pathname === '/contactus' ? 'active' : ''}
        >
          Contact us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;