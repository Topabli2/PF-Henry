-- DropForeignKey
ALTER TABLE "Games" DROP CONSTRAINT "Games_licenseId_fkey";

-- AlterTable
ALTER TABLE "Games" ALTER COLUMN "licenseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phone" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE SET NULL ON UPDATE CASCADE;
