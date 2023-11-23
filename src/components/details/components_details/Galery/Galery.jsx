"use client"
import React, { useState } from 'react';
import './Galery.css';

const Galery = ({ game }) => {
  const [expanded, setExpanded] = useState(false);

  const handleImageClick = () => {
    setExpanded(!expanded);
  };

  const handleCloseClick = () => {
    setExpanded(false);
  };

  return (
    <div className="GaleryContainer">
      <img src={game.caratula} alt="caratula"  className='caratulaD1'/>
      <h3 className='textG'>CAPTURA</h3>
      <img className='capturaD' src={game.captura} alt="captura" onClick={handleImageClick} />

      {expanded && (
        <div className="fullscreen-overlay" onClick={handleCloseClick}>
          <span className="close-button">&times;</span>
          <img className="expanded-image" src={game.captura} alt="captura" />
        </div>
      )}
    </div>
  );
};

export default Galery;

