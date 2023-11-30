import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

const clientID =
  "AVwb2hp2ZMkuRiQgJ1GujcCeizroHgzH-pOwUlWYdCNmPNcgRPaDjwrVg4BfI_k98Qd4DtUVpsYCquD8";
const clientSecret =
  "EC1dDcbNkGeGame0Xo6VXQk3GGbMrIDlAj-pSxFxyiZ1wcppR26wl-H-sykk642hpXRjldoMYChsM00q";

const environment = new paypal.core.SandboxEnvironment(clientID, clientSecret);

const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req, res) {
  const request = new paypal.orders.OrdersCreateRequest();

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "60.00",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: "60.00",
            },
          },
        },
        items: [
          {
            name: "GTA 5",
            description: "key of the game",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: "60.00",
            },
          },
        ],
      },
    ],
  });

  const response = await client.execute(request);

  return NextResponse.json({
    id: response.result.id,
  });
}
