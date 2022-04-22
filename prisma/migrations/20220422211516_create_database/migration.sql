-- CreateTable
CREATE TABLE "repositories" (
    "id" SERIAL NOT NULL,
    "topic" TEXT NOT NULL,
    "name" TEXT,
    "owner" TEXT NOT NULL,
    "ownerType" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "description" TEXT,
    "ogImage" TEXT,
    "license" TEXT,
    "isArchived" BOOLEAN NOT NULL,
    "isForked" BOOLEAN NOT NULL,
    "size" TEXT NOT NULL,
    "language" TEXT,
    "tags" TEXT NOT NULL,
    "openIssues" INTEGER NOT NULL,
    "forks" INTEGER NOT NULL,
    "stars" INTEGER NOT NULL,
    "watchers" INTEGER NOT NULL,
    "hasWiki" BOOLEAN NOT NULL,
    "hasPages" BOOLEAN NOT NULL,
    "hasSponsorship" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "repositories_pkey" PRIMARY KEY ("id")
);
