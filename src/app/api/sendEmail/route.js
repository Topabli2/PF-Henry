import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import  {prisma } from '@/libs/prisma';


const resend = new Resend('re_A58K1LkF_JUmBLeDpdWPyWHKtCPJ1p8Bc');
export async function POST(request) {
  const { status, email } = request.body;

 
  console.log(status, "requestjasjsa")
  let subject, html;

  try {
    subject = 'Confirmacion de compra';
    html = 'Tu compra ha sido realizada con éxito. Gracias por tu compra. vortex gaming te ama';
    await resend.emails.send({
      from: 'vorttexgaming <onboarding@resend.dev>',
      to: "pabloverat2@gmail.com",
      subject,
      html,
    });
    return NextResponse.json({ message: 'Correo electrónico enviado con éxito.' }); 
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

// export async function POST(request) {
//   const { user_Id } = request.body;
//   console.log(user_Id, request.body)
//   // Obtén el correo electrónico del usuario de la base de datos
//   const user =  await prisma.user.findMany({
//     where: { user_Id: user_Id}
//   });
//   const email = user.email;

//   let subject, html;

//   try {
//     subject = 'Confirmacion de compra';
//     html = 'Tu compra ha sido realizada con éxito. Gracias por tu compra. vortex gaming te ama';
//     await resend.emails.send({
//       from: 'vorttexgaming <onboarding@resend.dev>',
//       to: email,
//       subject,
//       html,
//     });
//     return NextResponse.json({ message: 'Correo electrónico enviado con éxito.' }); 
//   } catch (error) {
//     return NextResponse.json({ error: error.message });
//   }
// }