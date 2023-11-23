import { prisma } from "@/libs/prisma";

export const GET= async(req, res) => {
  const Allusers = await prisma.user.findMany()
  console.log(Allusers)
  res.json(Allusers);
}

export const POST = async(req, res) => {
  const { username,lastName,email,country, phone} = req.body
  const newUser = await prisma.user.create({
    data:
    {
    username: username,
    lastName: lastName,
    email: email,
    country: country, 
    phone: phone
  }
})
  res.json(newUser);
}
