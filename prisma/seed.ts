/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const bakeryData = [
  {
    name: "Pajda chleba",
    address: "Młynowa",
  },
  {
    name: "Sztuka chleba",
    address: "Krakowska",
  },
  {
    name: "SzwieŻo upieczona",
    address: "Cystersów",
  },
];

async function main() {
  await prisma.bakery.deleteMany();

  bakeryData.forEach(async (data) => {
    return prisma.bakery.create({ data });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
