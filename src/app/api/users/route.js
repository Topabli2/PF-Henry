import { NextResponse } from 'next/server';
import  {prisma } from '@/libs/prisma';


// export async function GET() {
//   const Allusers = await prisma.user.findMany()
//   return NextResponse.json(Allusers)
// }

// export async function POST(request) {
//   const {username, lastName, password, email, country, phone, profile } = await request.json()
//   const newUser = await prisma.user.create({
//     data:{
//       username,
//       lastName,
//       password,
//       email,
//       country,
//       phone,
//       profile: {
//         create: profile
//       }// creo el perfil cuando creo el usuario
//     },
// });
//   return NextResponse.json(newUser);
// };


// export async function PUT(request) {
//   const { id, username, lastName, country, phone } = await request.json();
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: id,
//     },
//     data: {
//       username,
//       lastName,
//       country,
//       phone,
//     },
//   });
//   return NextResponse.json(updatedUser);
// };
export async function POST(req, res){
  // Supongamos que ya has manejado la autenticación con Clerk y tienes el ID del usuario
  const clerkUserId = req.session.userId;
// Luego, puedes usar Prisma para guardar el ID del usuario en tu base de datos
  const user = await prisma.user.create({
    data: {
      id: clerkUserId,
      // Aquí puedes agregar cualquier otro campo que necesites
    },
  });
  res.json(user);
}





