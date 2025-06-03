import React from 'react';
import "../styles/component.css";

const scrollToSections = () => {
  const sections = [
    'gallery-section',
    'highlights-section',
    'packages-section',
    'footer-section'
  ];
  let delay = 0;
  sections.forEach((id, idx) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, delay);
    delay += 800; // 0.8s delay between each scroll
  });
};

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Explore The World With Risan Luxe</h1>
      <p>Your adventure starts here</p>
      <button onClick={scrollToSections}>Book Now</button>
    </div>
  </section>
);

export default Hero;