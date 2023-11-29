import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  if (request.method === 'GET') {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    const password = url.searchParams.get("password");

    console.log(username, password);

    // Verificar que ambos campos estén presentes
    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: {
        AND: {
          username: {
            equals: username,
          },
          password: {
            equals: password,
          },
        },
      },
    });

    if (user) {
      // Usuario autenticado con éxito
      return NextResponse.json(user);
    } else {
      // Usuario no encontrado o credenciales incorrectas
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } else {
    // Método no permitido
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}
