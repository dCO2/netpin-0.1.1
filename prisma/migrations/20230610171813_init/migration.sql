-- CreateTable
CREATE TABLE "User" (
    "uid" INT4 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Note" (
    "nid" INT4 NOT NULL DEFAULT unique_rowid(),
    "rid" INT4 NOT NULL,
    "link" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "title" STRING NOT NULL,
    "content" STRING NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("nid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Note_link_key" ON "Note"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Note_title_key" ON "Note"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Note_content_key" ON "Note"("content");

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_rid_fkey" FOREIGN KEY ("rid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
