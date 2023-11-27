/*
  Warnings:

  - Added the required column `capture` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wallpaper` to the `Games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Games" ADD COLUMN     "capture" TEXT NOT NULL,
ADD COLUMN     "wallpaper" TEXT NOT NULL;
