import { NextResponse } from 'next/server';
import  {prisma } from '@/libs/prisma';


export async function GET() {
  const Allusers = await prisma.user.findMany()
  return NextResponse.json(Allusers)
}

export async function POST(request) {
  const {username, lastName, email, country, phone } = await request.json()
  const newUser = await prisma.user.create({
    data:{
      username,
      lastName,
      email,
      country,
      phone
    },
});
  return NextResponse.json(newUser);
};
