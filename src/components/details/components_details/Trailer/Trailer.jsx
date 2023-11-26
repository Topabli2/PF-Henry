// Trailer.js
import React from 'react';
import './Trailer.css'

const Trailer = ({ game }) => {
  return (
    <div className="trailer-container">
      <iframe width="100%" height="100%" src={game.video} allowfullscreen></iframe>
    </div>
  );
};

export default Trailer;
