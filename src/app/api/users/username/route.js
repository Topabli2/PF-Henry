import { NextResponse } from 'next/server';
import  {prisma } from '@/libs/prisma';




  export async function GET(request) {
    const url = new URL(request.url)
    const name = url.searchParams.get('username')
  
    // Buscar en la base de datos cualquier coincidencia
    const result = await prisma.user.findMany({
      where: {
        username: name
      },
    })
  
    //return new Response(JSON.stringify({ name, result }), { status: 200 })
    return NextResponse.json(result);
  }
 