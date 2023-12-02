'use client';
import React, { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useUser } from '@clerk/nextjs';
import axios from 'axios';

const Payment = () => {

    const [statebuy, setStateBuy] = useState(" COMPRA EN PROGRESO ");
    const [css, setCss] = useState("progress");
    const data = useUser();
  const email = data?.user?.emailAddresses?.[0]?.emailAddress;
// const email = "pabloverat2@gmail.com"
 

    return (
        <div className='paypal'>
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
                            
                            await axios.post("/api/sendEmail", { email }, {
                                headers: {
                                  "Content-Type": "application/json",
                                },
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
                                    email
                                }),
                            });
                        }}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    )
}

export default Payment
