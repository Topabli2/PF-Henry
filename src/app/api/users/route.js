import { NextResponse } from 'next/server';
import  {prisma } from '@/libs/prisma';

export async function GET() {
    const allProfile = await prisma.user.findMany();
    return NextResponse.json(allProfile);
  }

  export async function POST(request) {
    const data = await request.json()
    const newUser = await prisma.user.create({
      data
  });
    return NextResponse.json(newUser);
  };