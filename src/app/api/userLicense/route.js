// import { NextResponse } from 'next/server';
// import  {prisma } from '@/libs/prisma';

// export async function PUT() {
//     const licenseActive =
  
//     const createLicense = await prisma.license.create({
//       data: {
//         name,
//         active,
//         game: {
//           connect: {
//             title: game,
//           },
//         },
//       },
//     });
  
//     return NextResponse.json(createLicense);
//   }

import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
export async function PUT(request) {
  const { userId, gameName } = await request.json();
  // Buscar la licencia existente para el juego
  const existingLicense = await prisma.license.findFirst({
      where: {
          game: {
              title: gameName,
            },
        },
    });
   
    if (!existingLicense) {
        return NextResponse.json({ error: 'Licencia no encontrada' });
    } else if (existingLicense){
        const { name, id } = existingLicense
        const userLicense = await prisma.user.update({
            where: {
                id: userId
            },
            connect: {
                license: {
                    id: id
                }
            }   
        })
        return NextResponse.json(userLicense)
    }
}

