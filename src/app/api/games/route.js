import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const games = await prisma.games.findMany();

  return NextResponse.json(games);
}

export async function POST(request) {
  const data = await request.json();
  const newGame = await prisma.games.create({ data });
  return NextResponse.json(newGame);
}

// export async function POST(request) {
//   const {
//     title,
//     platform,
//     description,
//     genre,
//     releaseDate,
//     developer,
//     publishedby,
//     image,
//     video,
//     size,
//     price,
//   } = await request.json();
//   const newGame = await prisma.games.create({
//     data: {
//       title,
//       platform,
//       description,
//       genre,
//       releaseDate,
//       developer,
//       publishedby,
//       image,
//       video,
//       size,
//       price,
//     },
//   });
//   return NextResponse.json(newGame);
// }
