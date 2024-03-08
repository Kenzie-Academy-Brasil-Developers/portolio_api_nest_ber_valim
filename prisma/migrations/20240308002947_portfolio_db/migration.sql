/*
  Warnings:

  - You are about to drop the `ContactIcons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ContactIcons";

-- CreateTable
CREATE TABLE "contactIcons" (
    "id" TEXT NOT NULL,
    "contactIcon" VARCHAR(200) NOT NULL,
    "contactName" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "contactLink" TEXT NOT NULL,

    CONSTRAINT "contactIcons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contactIcons_id_key" ON "contactIcons"("id");
