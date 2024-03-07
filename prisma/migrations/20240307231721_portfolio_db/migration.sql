-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "projectName" VARCHAR(80) NOT NULL,
    "projectImage" TEXT NOT NULL,
    "description" TEXT,
    "repositoryLink" VARCHAR(100) NOT NULL,
    "applicationLink" VARCHAR(100) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "techs" (
    "id" TEXT NOT NULL,
    "techIcon" TEXT NOT NULL,

    CONSTRAINT "techs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactIcons" (
    "id" TEXT NOT NULL,
    "contactIcon" VARCHAR(200) NOT NULL,
    "contactName" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "contactLink" VARCHAR(200) NOT NULL,

    CONSTRAINT "ContactIcons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_id_key" ON "projects"("id");

-- CreateIndex
CREATE UNIQUE INDEX "techs_id_key" ON "techs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ContactIcons_id_key" ON "ContactIcons"("id");
