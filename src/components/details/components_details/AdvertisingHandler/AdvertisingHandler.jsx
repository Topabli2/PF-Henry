import React from "react";
import { faGamepad, faGears ,faPanorama } from "@fortawesome/free-solid-svg-icons";
import IconosCard from "@/components/utils/IconCard/iconos_card";
import "./AdvertisingHandler.css";

const AdvertisingHandler = () => {
  return (
    <section className="AdvertisingHandlerContainer">
      <h1 className="DETALLESH1">DETALLES DEL JUEGO</h1>
      <div className="optionContainer" style={{fontSize:"1cm%",color:"#fe21ff;"}}>
        <IconosCard icon={faGamepad} name="INFO"/>
        <IconosCard icon={faPanorama} name="IMG"/>
        <IconosCard icon={faGears} name="REQ"/>
      </div>
    </section>
  );
};

export default AdvertisingHandler;
