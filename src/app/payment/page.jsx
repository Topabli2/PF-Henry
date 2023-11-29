"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./payment.css";
import { useState } from "react";
import { sendEmail } from "@/app/api/sendEmail/route";

const page = () => {
  const [statebuy, setStateBuy] = useState(" COMPRA EN PROGRESO ");
  const [css, setCss] = useState("progress");

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
            onApprove={async (data, actions) => {
              // agregamos async
              await actions.order.capture(); // agregamos await *Debbb
              setStateBuy("COMPRA REALIZADA CON EXITO");
              setCss("finish");

              //poner aqui el envio de gmail
              // Hacer una solicitud al back-end para enviar un correo electrónico
              await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  status: "success",
                  email: "pabloverat2@gmail.com",
                }),
              });
            }}
            // fin bloque backend
            onCancel={async (data) => {
              console.log(data);
              setStateBuy("COMPRA CANCELADA");
              setCss("cancel");

              // Hacer una solicitud al back-end para enviar un correo electrónico
              await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  status: "cancel",
                  email: "pabloverat2@gmail.com",
                }),
              });
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
