import React from "react";
import "./Advertising.css";

const Advertising = ({ game }) => {
  return (
    <section className="ss">
      <div className="tituloCDJ">
        <h1 className="tituloDJ">{game.titulo}</h1>
      </div>
      <div>
        <p>{game.descrpcion}</p>
      </div>
      <div>
        <p>{game.requisitos_minimos}</p>
      </div>
    </section>
  );
};

export default Advertising;
