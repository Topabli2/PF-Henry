import paypal from "@paypal/checkout-server-sdk";
import { NodeNextResponse } from "next/dist/server/base-http/node";

const clientID =
  "AVwb2hp2ZMkuRiQgJ1GujcCeizroHgzH-pOwUlWYdCNmPNcgRPaDjwrVg4BfI_k98Qd4DtUVpsYCquD8";
const clientSecret =
  "EC1dDcbNkGeGame0Xo6VXQk3GGbMrIDlAj-pSxFxyiZ1wcppR26wl-H-sykk642hpXRjldoMYChsM00q";

const environment = new paypal.core.SandboxEnvironment(clientID, clientSecret);

const client = new paypal.core.PayPalHttpClient(environment);

export function POST() {
  return NodeNextResponse.json({
    message: "processing payment",
  });
}
