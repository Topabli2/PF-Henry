import { NextResponse } from 'next/server';
import  {prisma } from '@/libs/prisma';

export async function GET() {
    try {
        const findLicense = await prisma.license.findMany();
          const licensesWithGames = findLicense.map((license) => {
            const gameName = license.Games ? license.Games.title : null;
            return {
              ...license,
              gameName,
            };
          });

          return NextResponse.status(200).json(licensesWithGames);
    } catch (error) {
        return NextResponse.status(400).send(error.message)
    }
}

// export async function POST (request) {
//   const {name, active, date } = await request.json();
//   console.log("Solicitud recibida:", req.body);
//       const createLicense = await prisma.license.create({
//         data: {
//           name,
//           date,
//           active
//         }
//         });
        
//         return NextResponse.json(createLicense);
// }