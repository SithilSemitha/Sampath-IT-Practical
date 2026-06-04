import React from 'react';
import '../styles/Features.css';

function Features() {
  const features = [
    {
      id: 1,
      title: 'Lightning Fast',
      icon: '⚡',
      description:
        'Our edge-optimized architecture ensures your applications run at peak performance everywhere.'
    },
    {
      id: 2,
      title: 'Bank-Grade Security',
      icon: '🔒',
      description:
        'Enterprise-level protection for your data with SOC2 Type II compliance and end-to-end encryption.'
    },
    {
      id: 3,
      title: 'AI Integration',
      icon: '🤖',
      description:
        'Native support for LLMs and machine learning workflows built directly into your CI/CD pipeline.'
    },
    {
      id: 4,
      title: 'Real-time Analytics',
      icon: '📊',
      description:
        'Get deep insights into your infrastructure and user behavior with sub-second latency.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Built for Performance</h2>
          <p className="section-subtitle">
            Experience the power of a platform designed for modern engineering teams.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="feature-card"
              role="region"
              aria-labelledby={`feature-${feature.id}`}
            >
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="feature-title" id={`feature-${feature.id}`}>
                {feature.title}
              </h3>
              <p className="feature-description">{feature.description}</p>
              <a href="#learn-more" className="feature-link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
