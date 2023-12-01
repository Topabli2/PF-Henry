import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async function PUT(request) {
  const { userId, idGame } = await request.json();
  const available = true;
  const existingLicense = await prisma.games.findFirst({
    where: {
      id: idGame,
    },
    include: {
      licenses: {
        select: {
          active: available,
        },
      },
    },
  });

  if (!existingLicense) {
    return NextResponse.json({ error: "No hay licensias disponibles en el momento para este juego" });
  } else if (existingLicense) {
    console.log(existingLicense);
    const { id, name } = existingLicense;
    const userLicense = await prisma.license.update({
      where: {
        id: id,
      },
      data: {
        userId: userId,
        active: false
      },
    });
    return NextResponse.json(userLicense);
  }
}
