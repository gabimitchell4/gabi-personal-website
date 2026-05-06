import React from 'react';
import '../styles/Designs.css';

const designData = [
  {
    name: 'Food App',
    description: 'UI/UX design for a food delivery mobile app, focusing on clean hierarchy and easy ordering flow.',
    image: '/food.png',
  },
  {
    name: 'YouTube Redesign',
    description: 'A conceptual redesign of YouTube\'s interface with a focus on improved content discovery and reduced visual clutter.',
    image: '/youtube.png',
  },
  {
    name: 'Invictus',
    description: 'Brand identity and visual design project with custom typography and cohesive color system.',
    image: '/invictus.png',
  },
];

function Designs() {
  return (
    <div className="designs-page">
      <h1 className="page-title">My <span>Designs</span></h1>
      <p className="page-subtitle">UI/UX and visual design work.</p>
      <div className="designs-grid">
        {designData.map((d) => (
          <div className="design-card" key={d.name}>
            <div className="design-img-wrap">
              <img
                className="design-img"
                src={process.env.PUBLIC_URL + d.image}
                alt={d.name}
              />
            </div>
            <div className="design-info">
              <h2 className="design-name">{d.name}</h2>
              <p className="design-desc">{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designs;
