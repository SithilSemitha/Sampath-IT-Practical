import React from 'react';
import '../styles/CTA.css';

function CTA() {
  return (
    <section className="cta-section" id="pricing">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">Ready to transform your workflow?</h2>
            <p className="cta-description">
              Join 1000+ companies building the future on NexaCore
            </p>

            <div className="cta-buttons">
              <button
                className="btn btn-primary btn-lg"
                aria-label="Join NexaCore now"
              >
                Join Now
              </button>
              <button
                className="btn btn-outline btn-lg"
                aria-label="Contact our sales team">
                Contact Sales
              </button>
            </div>

            {/*Badges */}
            <div className="cta-trust">
              <span className="trust-item">14-day free trial</span>
              <span className="trust-item">No credit card needed</span>
              <span className="trust-item">Cancel anytime</span>
            </div>
          </div>
          <div className="cta-background-glow"></div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
