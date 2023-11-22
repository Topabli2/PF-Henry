/*
  Warnings:

  - You are about to drop the column `name` on the `Games` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gameLicenceId` on the `UserGames` table. All the data in the column will be lost.
  - You are about to drop the `_GamesToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gameLicence` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `Games` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,gameId]` on the table `UserGames` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `developer` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licenseId` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publishedby` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseDate` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileName` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_type` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserGames" DROP CONSTRAINT "UserGames_gameLicenceId_fkey";

-- DropForeignKey
ALTER TABLE "_GamesToUser" DROP CONSTRAINT "_GamesToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_GamesToUser" DROP CONSTRAINT "_GamesToUser_B_fkey";

-- DropIndex
DROP INDEX "UserGames_userId_gameId_gameLicenceId_key";

-- AlterTable
ALTER TABLE "Games" DROP COLUMN "name",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "developer" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "licenseId" INTEGER NOT NULL,
ADD COLUMN     "platform" JSONB NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "publishedby" TEXT NOT NULL,
ADD COLUMN     "releaseDate" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "video" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "profileName" TEXT NOT NULL,
ADD COLUMN     "profile_type" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "phone" INTEGER,
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserGames" DROP COLUMN "gameLicenceId";

-- DropTable
DROP TABLE "_GamesToUser";

-- DropTable
DROP TABLE "gameLicence";

-- CreateTable
CREATE TABLE "License" (
    "id" SERIAL NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "License_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userGames" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "userGames_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Games_title_key" ON "Games"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserGames_userId_gameId_key" ON "UserGames"("userId", "gameId");

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
