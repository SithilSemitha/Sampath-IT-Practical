import React, { useEffect, useState } from 'react';
import './styles/globals.css';
import './components/Components.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Features from './sections/Features';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import { LoginForm, PricingCard, GalleryGrid } from './components';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    if (!isLoginOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsLoginOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoginOpen]);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const pricingPlans = [
    {
      plan: 'Starter',
      price: 29,
      features: ['5 Projects', 'Basic Analytics', '5GB Storage', 'Email Support'],
      isPopular: false,
      variant: 'secondary'
    },
    {
      plan: 'Professional',
      price: 99,
      features: ['Unlimited Projects', 'Advanced Analytics', '1TB Storage', 'Priority Support', 'Custom Domain'],
      isPopular: true,
      variant: 'primary'
    },
    {
      plan: 'Enterprise',
      price: 299,
      features: ['Unlimited Everything', 'Real-time Analytics', 'Unlimited Storage', 'Dedicated Support', 'Custom Integration'],
      isPopular: false,
      variant: 'secondary'
    }
  ];

  return (
    <>
      <Navigation onLoginClick={openLogin} />
      <main>
        <Hero onLoginClick={openLogin} />  
        <Features />
        
        {/* Pricing Section */}
        <section className="section" id="pricing">
          <div className="container">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">Choose the perfect plan for your needs</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '48px' }}>
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.plan} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section" id="gallery">
          <div className="container">
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">Explore our work (click images to view)</p>
            <GalleryGrid />
          </div>
        </section>

        <CTA />
      </main>

      {isLoginOpen && (
        <div className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-modal-title" onClick={closeLogin}>
          <div className="login-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="login-modal-close"
              aria-label="Close login form"
              onClick={closeLogin}
            >
              ×
            </button>
            <LoginForm />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;


