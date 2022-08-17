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
    info: "Super białasy w piątki",
  },
  {
    name: "Sztuka chleba i wina",
    address: "Krakowska",
    info: "U nas znajdziesz najlepsze chałki i wina na udany weekend.",
  },
  {
    name: "SzwieŻo upieczona",
    address: "Cystersów",
    info: "Super piekarnia w Krakowie",
  },
];

async function main() {
  await prisma.bakery.deleteMany();
  console.info("Bakery table deleted from db");

  bakeryData.forEach(async (data) => {
    return prisma.bakery.create({ data });
  });
  console.info("Bakery seed date created");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
