import React, { useState } from 'react';
import "../styles/component.css";
import ScenicImg from '../assets/scenicview.png';
import CultureImg from '../assets/localcult.png';
import AdventureImg from '../assets/sports.png';

const highlightData = [
  { label: "Scenic Views", img: ScenicImg },
  { label: "Local Culture", img: CultureImg },
  { label: "Adventure Sports", img: AdventureImg }
];

const Highlights = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="highlights">
      <h2>Destination Highlights</h2>
      <div className="highlight-grid">
        {highlightData.map((item, idx) => (
          <button
            key={item.label}
            className={`highlight-item${selected === idx ? ' active' : ''}`}
            onClick={() => setSelected(idx)}
            style={{ minWidth: 180, margin: 15 }}
          >
            {item.label}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="highlight-img-row">
          <img
            src={highlightData[selected].img}
            alt={highlightData[selected].label}
            className="highlight-img-main"
          />
          <div className="highlight-img-caption">{highlightData[selected].label}</div>
        </div>
      )}
    </section>
  );
};

export default Highlights;