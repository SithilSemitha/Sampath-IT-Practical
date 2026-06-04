import React from 'react';

function PricingCard({ plan = 'Pro', price = 99, features = [], isPopular = false, variant = 'secondary' }) {
  return (
    <div className={`pricing-card pricing-card--${variant} ${isPopular ? 'pricing-card--popular' : ''}`}>
      {isPopular && <div className="pricing-badge">Most Popular</div>}
      
      <h3 className="pricing-title">{plan}</h3>
      
      <div className="pricing-amount">
        <span className="pricing-currency">$</span>
        <span className="pricing-value">{price}</span>
        <span className="pricing-period">/month</span>
      </div>

      <ul className="pricing-features">
        {features.map((feature, idx) => (
          <li key={idx} className="pricing-feature">
            <span className="feature-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className={`pricing-btn pricing-btn--${variant}`} aria-label={`Get started with ${plan}`}>
        Get Started
      </button>
    </div>
  );
}

export default PricingCard;
