import { NextResponse } from 'next/server';
import  {prisma } from '@/libs/prisma';

export async function GET() {
 
        const findLicense = await prisma.license.findMany();
          const licensesWithGames = findLicense.map((license) => {
            const gameName = license.Games ? license.Games.title : null;
            return {
              ...license,
              gameName,
            };
          });

          return NextResponse.json(licensesWithGames);
    
}

export async function POST (request) {
  const {name, active, date } = await request.json();
      const createLicense = await prisma.license.create({
        data: {
          name,
          date,
          active
        }
        });
        
        return NextResponse.json(createLicense);
}