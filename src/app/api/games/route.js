import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Obteniendo datos!");
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json(data);
}

export function PUT() {
  return NextResponse.json("Actualizando datos!");
}

export function DELETE() {
  return NextResponse.json("Borrando datos!");
}
