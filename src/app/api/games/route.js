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

export async function PUT(request) {
  const data = await request.json();
  const updateGame = await prisma.games.update({
    where: { id: data.id },
    data,
  });
  return NextResponse.json(updateGame);
}

//VERSION ANTIGUA DE POST
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

// export async function PUT(request) {
//   const data = await request.json();
//   const updateGame = await prisma.games.update({ data });
//   return NextResponse.json(updateGame);
// }

//VERSION ANTIGUA DE PUT
// export async function PUT(request) {
//   const data = await request.json();
//   const updateGame = await prisma.games.update({
//     where: {
//       id: data.id,
//     },
//     data: {
//       title: data.title,
//     },
//   });
//   return NextResponse.json(updateGame);
// }
