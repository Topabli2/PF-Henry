import { NextResponse } from 'next/server';
import  {prisma } from '@/libs/prisma';

export async function GET() {
    const allProfile = await prisma.profile.findMany();
    return NextResponse.json(allProfile);
  }
  
 export async function POST(request) {
    const { profileName, profile_type} = await request.json();
    const newProfile = await prisma.profile.create({
      data: {
        profileName,
        profile_type
      },
    });
    return NextResponse.json(newProfile)
  }

export async function PUT(request) {
  const {id, profileName, profile_type} = await request.json();
    const newProfile = await prisma.profile.update({
      where: {
        id: id,
      },
      data: {
        profileName,
        profile_type
      },
    });
    return NextResponse.json(newProfile)
}