/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `License` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "License_name_key" ON "License"("name");
