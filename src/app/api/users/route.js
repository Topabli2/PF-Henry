import { NextResponse } from 'next/server';
import  {prisma } from '@/libs/prisma';

export async function GET() {
    const allProfile = await prisma.user.findMany();
    return NextResponse.json(allProfile);
  }

export async function POST(request) {
  const { user_id, email } = await request.json();
  
  const newUser = await prisma.user.create({
    data: {
       user_id,
       email
     }
  });
  
  return NextResponse.json(newUser);
};