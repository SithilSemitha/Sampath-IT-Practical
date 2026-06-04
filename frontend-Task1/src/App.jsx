import React from 'react';
import './styles/globals.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Features from './sections/Features';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <>

      <Navigation />
          <main>
              <Hero />  
              <Features />
              <CTA />
          </main>
      <Footer />
    </>
  );
}

export default App;


