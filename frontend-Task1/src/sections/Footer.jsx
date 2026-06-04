import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Integrations', href: '#integrations' },
        { label: 'Enterprise', href: '#enterprise' },
        { label: 'Changelog', href: '#changelog' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'API Reference', href: '#api' },
        { label: 'Guides', href: '#guides' },
        { label: 'Community', href: '#community' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#privacy' },
        { label: 'Terms', href: '#terms' },
        { label: 'Security', href: '#security' },
        { label: 'Cookies', href: '#cookies' }
      ]
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon" aria-hidden="true">▲</span>
              <span className="logo-text">
                Nexa<span className="gradient-text">Core</span>
              </span>
            </div>
            <p className="footer-tagline">
              Building the infrastructure of the future with AI-powered innovation.
            </p>
            {/* Social Links */}
            <div className="social-links">
              <a href="/twitter" className="social-link" aria-label="Follow on Twitter">
                𝕏
              </a>
              <a href="/github" className="social-link" aria-label="Visit GitHub">
                ⚙️
              </a>
              <a href="/linkedin" className="social-link" aria-label="Follow on LinkedIn">
                in
              </a>
              <a href="/discord" className="social-link" aria-label="Join Discord">
                ◉
              </a>
            </div>
          </div>

          {/* Footer Links Grid */}
          <nav className="footer-links" role="navigation" aria-label="Footer navigation">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="link-group">
                <h4 className="link-group-title">{section.title}</h4>
                <ul className="link-list">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} NexaCore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
