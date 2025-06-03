import React from 'react';
import LosA from '../assets/LosA.png';
import Swiss from '../assets/Swiss.png';
import Bali from '../assets/Bali.png';
import "../styles/component.css";

const Gallery = () => (
    <section className="gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery-grid">
            <img src={LosA} alt="Los Angeles" />
            <img src={Swiss} alt="Switzerland" />
            <img src={Bali} alt="Bali" />
        </div>
    </section>
);

export default Gallery;