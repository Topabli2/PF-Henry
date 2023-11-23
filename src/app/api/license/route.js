import { prisma } from "@/libs/prisma";

export async function GET (req, res)  {
    try {
        const findLicense = await prisma.license.findMany({
            // include: games
          });
          console.log(findLicense)
          const licensesWithGames = findLicense.map((license) => {
            const gameName = license.Games ? license.Games.title : null;
            return {
              ...license,
              gameName,
            };
          });

          return res.status(200).json(licensesWithGames);
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

export async function POST (req, res) {
  const {name, active, date } = req.body
  console.log("Solicitud recibida:", req.body);
      const createLicense = await prisma.license.create({
        data: {
          name,
          date,
          active
        }
        });
        
        res.json(createLicense);

}