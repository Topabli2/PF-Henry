import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Obteniendo userId!");
}

export function POST() {
  return NextResponse.json("Creando userId!");
}

export function PUT() {
  return NextResponse.json("Editando userId!");
}

export function DELETE() {
  return NextResponse.json("Borrando userId!");
}
