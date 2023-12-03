import { NextResponse } from "next/server";
import { Resend } from "resend";
//const resend = new Resend('re_A58K1LkF_JUmBLeDpdWPyWHKtCPJ1p8Bc');
const resend = new Resend("re_Tiv61iGA_f8JmR9KUZkUE357BNAUkyKDm");

export async function POST(request) {
  const { email } = await request.json();
  console.log(email);
  let subject, html;

  try {
    subject = "Confirmacion de compra";
    html =
      "Tu compra ha sido realizada con éxito. Gracias por tu compra. vortex gaming te ama <br> TU KEY: 25643HJ5-212S1-2FH2SAS";
    await resend.emails.send({
      from: "vorttexgaming <onboarding@resend.dev>",
      to: "riosdeborasabrina@gmail.com",
      subject,
      html,
    });
    return NextResponse.json({
      message: "Correo electrónico enviado con éxito.",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
