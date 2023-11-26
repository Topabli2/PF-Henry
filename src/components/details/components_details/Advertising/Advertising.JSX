import React from "react";
import "./Advertising.css";

const Advertising = ({ game }) => {
  return (
    <section className="ss">
      <div className="tituloCDJ">
        <h1 className="tituloDJ">{game.title}</h1>
      </div>
    </section>
  );
};

export default Advertising;
