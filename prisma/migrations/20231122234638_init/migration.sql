/*
  Warnings:

  - You are about to drop the column `Date` on the `License` table. All the data in the column will be lost.
  - Added the required column `date` to the `License` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `License` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "License" DROP COLUMN "Date",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
