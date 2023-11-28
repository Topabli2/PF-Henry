// import { NextResponse } from "next/server";
// import { prisma } from "@/libs/prisma";

// export async function GET(request) {
//     // Obtener los datos del cuerpo de la solicitud
//     const { username, password } = await request.json();

//     // Verificar si el usuario existe en la base de datos
//     const user = await prisma.user.findFirst({
//         where: {
//             AND: {
//                 userName: username,
//                 password: password
//             }
//         }
//     });

//     if (user) {
//         // Usuario autenticado, devolver respuesta exitosa
//         return NextResponse.json({ message: "Login exitoso" });
//     } else {
//         // Usuario no encontrado o contraseña incorrecta, devolver respuesta de error
//         return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
//     }
// }
import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
	if (request.method === 'POST') {
		const { username, password } = request.body;
		console.log(username, password);

		const user = await prisma.user.findFirst({
			where: {
				AND: {
					username: username,
					password: password,
				},
			},
		});

		if (user) {
			return NextResponse.json({ message: 'Login successful' });
		}

		return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
	}

	return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
};
