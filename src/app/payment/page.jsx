"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./payment.css";

const page = () => {
  return (
    <div className="paypal">
      <div className="visualP">
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
              const res = await fetch("/api/chekout", {
                method: "POST",
              });
              const data = await res.json(); // Corrected this line
              console.log(data);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

//onCancel={()=>{}}
//onApprove={()=>{}}

export default page;
