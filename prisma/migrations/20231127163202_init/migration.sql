/*
  Warnings:

  - You are about to drop the `UserGames` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userGames` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserGames" DROP CONSTRAINT "UserGames_gameId_fkey";

-- DropForeignKey
ALTER TABLE "UserGames" DROP CONSTRAINT "UserGames_userId_fkey";

-- AlterTable
ALTER TABLE "License" ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "UserGames";

-- DropTable
DROP TABLE "userGames";

-- AddForeignKey
ALTER TABLE "License" ADD CONSTRAINT "License_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
