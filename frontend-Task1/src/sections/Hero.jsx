import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/testimg.jpg';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Tech startup for modern teams</p>
          <h1>Launch faster with smarter infrastructure.</h1>
          <p className="hero-text">
            NexaCore helps engineering teams ship secure, high-performance products with AI-powered workflows, real-time telemetry, and cloud automation.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Get started
            </a>
            <a href="#features" className="btn btn-secondary">
              See features
            </a>
          </div>

          <div className="hero-stats" aria-label="Platform statistics">
            <div className="stat-item">
              <strong>10k+</strong>
              <span>Companies onboarded</span>
            </div>
            <div className="stat-item">
              <strong>90%</strong>
              <span>Total Guarantee</span>
            </div>
            <div className="stat-item">
              <strong>24/7</strong>
              <span>Engineer support</span>
            </div>
          </div>
        </div>

        <aside className="hero-visual">
          <div className="visual-card">
            <img
              className="hero-image"
              src={heroImage}
              alt="Team dashboard and insight workspace"
            />
            <div className="visual-caption">
              <span>Connected operations</span>
              <p>Preview live dashboards, deployment insights, and team collaboration at a glance.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
