import React, { useState } from 'react';
import '../styles/Navigation.css';

function Navigation({ onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleLoginClick = () => {
    setIsMenuOpen(false);
    if (onLoginClick) onLoginClick();
  };

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="NexaCore home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">▲</span>
          <span className="brand-name">
            Nexa<span className="brand-highlight">Core</span>
          </span>
        </a>
        
        <button
          className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button type="button" className="btn btn-primary" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </header>
  );
}
    
export default Navigation;
