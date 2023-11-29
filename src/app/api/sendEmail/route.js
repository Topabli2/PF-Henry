



/*const resend = new Resend({
    apiKey: "3968e8d2-45a5-46fc-a0a5-a574922fbf5b"
})

export default async function POST(req) {
    const { email} = req.body

    try {
        await resend.email.send({
            to: email,
            from: 'vorttexgaming.com',
            subject: 'Payment Confirmation',
            text: ""
        })

        res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error sending email' })
    }
}*/



import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('3968e8d2-45a5-46fc-a0a5-a574922fbf5b');

export async function POST(request) {
  const { status, email } = request.body;

  let subject, text;
  if (status === 'success') {
    subject = 'Compra realizada con éxito';
    text = 'Tu compra ha sido realizada con éxito. Gracias por tu compra.';
  } else if (status === 'cancel') {
    subject = 'Compra cancelada';
    text = 'Tu compra ha sido cancelada. Por favor, inténtalo de nuevo.';
  }

  try {
    await resend.send({
      to: email,
      from: 'vorttexgaming.com',
      subject,
      text,
    });

    return NextResponse.json({ message: 'Correo electrónico enviado con éxito.' });
  } catch (error) {
    return NextResponse.json({ error: 'No se pudo enviar el correo electrónico.' }).status(500);
  }
}
