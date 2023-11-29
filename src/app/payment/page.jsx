"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./payment.css";
import { useState } from "react";

const page = () => {

   const [statebuy,setStateBuy]= useState(" COMPRA EN PROGRESO ");
   const [css,setCss]= useState("progress");

  return (
    <div className="paypal">
      <div className="visualP">




        <h1 className={css}>{statebuy}</h1>
        <PayPalScriptProvider
          options={{
            clientId:
              "AVwb2hp2ZMkuRiQgJ1GujcCeizroHgzH-pOwUlWYdCNmPNcgRPaDjwrVg4BfI_k98Qd4DtUVpsYCquD8",
          }}
        >
          <PayPalButtons
            style={{
              label: "pay",
            }}
            createOrder={async () => {
              const res = await fetch("/api/checkout", {
                method: "POST",
              });
              const order = await res.json();
              return order.id;
            }}
            onApprove={(data, actions) => {
              actions.order.capture();
              setStateBuy("COMPRA REALIZADA CON EXITO")
              setCss("finish")
              
              //poner aqui el envio de gmail 

            }}
            onCancel={(data) => {
              console.log(data);
              setStateBuy("COMPRA CANCELADA")
              setCss("cancel")
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

//
//

export default page;
