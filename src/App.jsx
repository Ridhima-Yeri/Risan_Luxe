import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';
import './styles/global.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <div id="gallery-section"><Gallery /></div>
      <div id="highlights-section"><Highlights /></div>
      <div id="packages-section"><Packages /></div>
      <CTA />
      <div id="footer-section"><Footer /></div>
    </div>
  );
};

export default App;