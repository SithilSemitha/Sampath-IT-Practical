import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="NexaCore home">
          <span className="brand-mark" aria-hidden="true">▲</span>
          <span className="brand-name">
            Nexa<span className="brand-highlight">Core</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#pricing">Contact</a>
        </nav>
        <a href="/login" className="btn btn-primary">
          Login
        </a>
      </div>
    </header>
  );
}
    
export default Navigation;
