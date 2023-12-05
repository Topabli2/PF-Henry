import { NextResponse } from 'next/server';
import  {prisma } from '@/libs/prisma';

// export async function GET() {
//     const allProfile = await prisma.user.findMany();
//     return NextResponse.json(allProfile);
//   }

// export async function POST(request) {
//   const { user_id, email } = await request.json();
  
//   const newUser = await prisma.user.upsert({
//     where: { user_id: user_id },
//     create: {
//        user_id,
//        email
//      }
//   });
  
//   return NextResponse.json(newUser);
// };


export async function POST(request) {
  try {
    const { user_id, email } = await request.json();
    let existingUser = await prisma.user.findUnique({
      where: { user_id: user_id },
    });

    if (existingUser) {
      // Si el usuario ya existe, simplemente devolverlo
      return NextResponse.json(existingUser);
    } else {
      // Si el usuario no existe, crear uno nuevo
      const newUser = await prisma.user.create({
        data: {
          user_id,
          email,
          fullName
        },
      });
      return NextResponse.json(newUser);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
}
