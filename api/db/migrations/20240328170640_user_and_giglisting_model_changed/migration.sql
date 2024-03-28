-- AlterTable
ALTER TABLE "GigListing" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "instrumentsPlayed" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "_Attending" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Attending_AB_unique" ON "_Attending"("A", "B");

-- CreateIndex
CREATE INDEX "_Attending_B_index" ON "_Attending"("B");

-- AddForeignKey
ALTER TABLE "GigListing" ADD CONSTRAINT "GigListing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Attending" ADD CONSTRAINT "_Attending_A_fkey" FOREIGN KEY ("A") REFERENCES "GigListing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Attending" ADD CONSTRAINT "_Attending_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
