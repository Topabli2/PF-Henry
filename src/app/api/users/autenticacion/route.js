import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
    // Obtener los datos del cuerpo de la solicitud
    const { username, password } = await request.json();

    // Verificar si el usuario existe en la base de datos
    const user = await prisma.user.findFirst({
        where: {
            AND: {
                userName: username,
                password: password
            }
        }
    });

    if (user) {
        // Usuario autenticado, devolver respuesta exitosa
        return NextResponse.json({ message: "Login exitoso" });
    } else {
        // Usuario no encontrado o contraseña incorrecta, devolver respuesta de error
        return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }
}
