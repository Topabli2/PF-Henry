import { NextResponse } from "next/server";
import  {prisma } from '@/libs/prisma';

export async function POST(request) {
  const {data} = await request.json();
  console.log("POSTEANDO INFO..");
  console.log(data);
  if (data ) {
    // Insertar nuevo usuario en la base de datos
    const newUser = await prisma.user.create({
      data: {
        user_id: data?.id,
        email:  data?.email_addresses[0]?.email_address,
        username: data?.username
      },
    });
    console.log("Usuario creado!!!!!!!", newUser);
    
    return NextResponse.json(newUser);
  } else {
    console.log("No se pudo crear el usuario. data o data.user no existen.");
  }
  
}