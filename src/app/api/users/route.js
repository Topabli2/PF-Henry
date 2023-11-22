import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  return NextResponse.json(allUsers);
}
