import { prisma } from "@/libs/prisma";

export async function GET(req, res) {
    const allProfile = await prisma.profile.findMany();
    res.json(allProfile);
  }
  
 export async function POST (req, res) {
    const { profileName, profile_type} = req.body;
    const newProfile = await prisma.profile.create({
      data: {
        profileName,
        profile_type
      },
    });
  res.json(newProfile)
  }