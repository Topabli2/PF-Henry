-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gameLicence" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "gameLicence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGames" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "gameLicenceId" INTEGER NOT NULL,

    CONSTRAINT "UserGames_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GamesToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserGames_userId_gameId_gameLicenceId_key" ON "UserGames"("userId", "gameId", "gameLicenceId");

-- CreateIndex
CREATE UNIQUE INDEX "_GamesToUser_AB_unique" ON "_GamesToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GamesToUser_B_index" ON "_GamesToUser"("B");

-- AddForeignKey
ALTER TABLE "UserGames" ADD CONSTRAINT "UserGames_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGames" ADD CONSTRAINT "UserGames_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGames" ADD CONSTRAINT "UserGames_gameLicenceId_fkey" FOREIGN KEY ("gameLicenceId") REFERENCES "gameLicence"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GamesToUser" ADD CONSTRAINT "_GamesToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GamesToUser" ADD CONSTRAINT "_GamesToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
