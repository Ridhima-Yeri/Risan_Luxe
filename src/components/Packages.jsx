import React from 'react';
import "../styles/component.css";
import LosA from '../assets/LosA.png';
import Swiss from '../assets/Swiss.png';
import Bali from '../assets/Bali.png';

const packages = [
  {
    name: "6-Day Los Angeles Trip",
    price: "$600",
    img: LosA,
    details: "Enjoy 6 days in sunny Los Angeles with guided tours and luxury accommodation. Your adventure includes visits to the iconic Hollywood Walk of Fame, the glamorous Beverly Hills, and the vibrant Santa Monica Pier. Explore the world-famous Universal Studios for thrilling rides and behind-the-scenes experiences, and stroll along Venice Beach to soak up the lively atmosphere. Discover the art and culture of downtown LA, shop at The Grove, and enjoy breathtaking views from the Griffith Observatory. This package offers a perfect blend of sightseeing, relaxation, and unforgettable experiences in the City of Angels. Where you’ll visit in Los Angeles: 1.Hollywood Walk of Fame, 2.Beverly Hills, 3.Santa Monica Pier, 4.Universal Studios Hollywood, 5.Venice Beach, 6.Downtown LA (art & culture)."
  },

  {
    name: "5-Day Switzerland Tour",
    price: "$999",
    img: Swiss,
    details: "Experience the beauty of Switzerland with scenic train rides and alpine adventures. Your journey will take you through the breathtaking Swiss Alps aboard the world-famous Glacier Express, offering panoramic views of snow-capped peaks and charming mountain villages. Explore the picturesque city of Lucerne with its historic old town and iconic Chapel Bridge, and enjoy a boat cruise on the crystal-clear waters of Lake Lucerne. Visit the vibrant city of Zurich, discover the serene beauty of Interlaken nestled between two lakes, and marvel at the majestic Rhine Falls, Europe’s largest waterfall. This tour also includes opportunities for hiking, sampling Swiss chocolate and cheese, and immersing yourself in the rich culture and traditions of Switzerland. Where you’ll visit in Switzerland: 1.Glacier Express panoramic train journey, 2.Lucerne (Old Town, Chapel Bridge, Lake Lucerne cruise), 3.Zurich city tour, 4.Interlaken (between Lake Thun and Lake Brienz), 5.Rhine Falls, 6.Swiss chocolate and cheese tasting experiences."
  },

  {
    name: "5-Day Bali Experience",
    price: "$485",
    img: Bali,
    details: "Relax in Bali with beach resorts, cultural tours, and tropical cuisine. Your journey will take you to the stunning beaches of Kuta and Seminyak, where you can unwind by the turquoise waters and enjoy vibrant nightlife. Explore the lush rice terraces of Ubud, visit the sacred Tirta Empul Temple, and experience the traditional Balinese culture through local dance performances. The tour also includes a trip to the iconic Tanah Lot sea temple, a sunrise trek up Mount Batur, and time to savor authentic Balinese cuisine at local markets and seaside cafes. Whether you seek adventure or relaxation, Bali offers a perfect blend of natural beauty, cultural richness, and unforgettable experiences. Where you’ll visit in Bali: 1.Kuta & Seminyak Beaches, 2.Ubud rice terraces and art markets, 3.Tirta Empul Temple, 4.Tanah Lot Temple, 5.Mount Batur sunrise trek."
  }
];

const openPackageDetail = (pkg) => {
  const newTab = window.open('', '_blank');
  newTab.document.write(`
    <html>
      <head>
        <title>${pkg.name}</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f8fafc; color: #222; padding: 40px; text-align: center; }
          img { max-width: 400px; border-radius: 12px; box-shadow: 0 4px 24px rgba(80,120,200,0.13);}
          .price { font-size: 1.5rem; color: #0077cc; margin: 18px 0 8px 0; }
          .details { font-size: 1.1rem; margin-bottom: 24px; }
          button { background: #0077cc; color: #fff; border: none; padding: 10px 24px; border-radius: 6px; cursor: pointer; font-size: 1rem; }
          button:hover { background: #005fa3; }
        </style>
      </head>
      <body>
        <h1>${pkg.name}</h1>
        <img src="${pkg.img}" alt="${pkg.name}" />
        <div class="price">${pkg.price}</div>
        <div class="details">${pkg.details}</div>
        <button onclick="window.close()">Close</button>
      </body>
    </html>
  `);
  newTab.document.close();
};

const Packages = () => (
  <section className="packages">
    <h2>Travel Packages</h2>
    <div className="package-list">
      {packages.map(pkg => (
        <div className="package" key={pkg.name}>
          <button onClick={() => openPackageDetail(pkg)}>
            {pkg.name} - {pkg.price}
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Packages;