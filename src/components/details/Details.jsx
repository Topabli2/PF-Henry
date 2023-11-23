import React from "react";
import Galery from "./components_details/Galery/Galery";
import Trailer from "./components_details/Trailer/Trailer";
import Advertising from "./components_details/Advertising/Advertising" 
import Buy from "./components_details/Buy/Buy";
import AdvertisingHandler from "./components_details/AdvertisingHandler/AdvertisingHandler";


import "./Details.css";
import { Fake } from "@/fakeDB";

const Details = () => {
  const game = Fake();

  const detailsStyle = {
    backgroundImage: `url('${game.wallpeaper}')`,
  };

  return (
    <>
      <section className="Details" style={detailsStyle}>
        <div className="Overlay"></div>
        <img
          className="OfertaD"
          src="https://github.com/zuoki/imagenesPF/blob/main/ofertaDetails.png?raw=true"
        />
        <Galery className="GaleryDC" game={game} />
        <AdvertisingHandler/>
        <Advertising  game={game} />
        <Buy game={game}/>
      </section>
    </>
  );
};

export default Details;
