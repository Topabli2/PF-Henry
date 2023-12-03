import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request) {
  const data = await request.json();
  console.log("POSTEANDO INFO..");
  console.log(data);
  return NextResponse.json(data);
}

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { type, data } = req.body;

//     switch (type) {
//       case "user.created":
//         // Insertar nuevo usuario en la base de datos
//         const newUser = await prisma.user.create({
//           data: {
//             user_id: data.id,
//             // Aquí puedes agregar más campos según los datos que recibas en el webhook
//           },
//         });
//         res.status(200).json({ message: "Usuario creado exitosamente" });
//         break;
//       case "user.deleted":
//         // Eliminar usuario de la base de datos
//         const deletedUser = await prisma.user.delete({
//           where: {
//             user_id: data.id,
//             // status:
//           },
//         });
//         res.status(200).json({ message: "Usuario eliminado exitosamente" });
//         break;
//       case "user.updated":
//         // Actualizar usuario en la base de datos
//         const updatedUser = await prisma.user.update({
//           where: {
//             id: data.id,
//           },
//           data: {
//             // Aquí puedes agregar los campos que necesites actualizar
//           },
//         });
//         res.status(200).json({ message: "Usuario actualizado exitosamente" });
//         break;
//       default:
//         res.status(400).json({ message: "Tipo de evento no soportado" });
//     }
//   } else {
//     res.status(405).json({ message: "Método no permitido" });
//   }
// }
