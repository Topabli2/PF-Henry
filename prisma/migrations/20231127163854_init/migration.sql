/*
  Warnings:

  - You are about to drop the column `licenseId` on the `Games` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gameId]` on the table `License` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileName]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Games" DROP CONSTRAINT "Games_licenseId_fkey";

-- AlterTable
ALTER TABLE "Games" DROP COLUMN "licenseId";

-- AlterTable
ALTER TABLE "License" ADD COLUMN     "gameId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "License_gameId_key" ON "License"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_profileName_key" ON "Profile"("profileName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "License" ADD CONSTRAINT "License_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE SET NULL ON UPDATE CASCADE;
