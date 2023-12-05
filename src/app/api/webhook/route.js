import { NextResponse } from "next/server";
import  {prisma } from '@/libs/prisma';

// export async function POST(request) {
//   const data = await request.json();
//   // console.log("POSTEANDO INFO..");
//   // console.log(data);
//   return NextResponse.json(data);
// }

// export async function POST (request) {
//     const data = await request.json();

//       // Insertar nuevo usuario en la base de datos
//       const newUser = await prisma.user.create({
//         data: {
//           user_id: data.user.id,
//           email:  data.user.primaryEmailAddress.emailAddress,
//           username: data.user.username
//           // Aquí puedes agregar más campos según los datos que recibas en el webhook
//         },
//       });
//       console.log("Usuario creado!!!!!!!", newUser);
//       return NextResponse.json(newUser);
    
// }

// export async function POST(request) {
//   const data = await request.json();
//   console.log("POSTEANDO INFO..");
//   console.log(data);

//   // Insertar nuevo usuario en la base de datos
//   const newUser = await prisma.user.create({
//     data: {
//       user_id: data?.user?.id,
//       email:  data?.user?.email_addresses?.[0]?.emailAddress,
//       username: data?.user?.username
//       // Aquí puedes agregar más campos según los datos que recibas en el webhook
//     },
//   });
//   console.log("Usuario creado!!!!!!!", newUser);
  
//   return NextResponse.json(newUser);
// }