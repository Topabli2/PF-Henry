import { NextResponse } from "next/server";

export function GET(request, { params }) {
  return NextResponse.json("Buscando usuario");
}
