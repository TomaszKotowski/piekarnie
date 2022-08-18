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
    socialMediaLinks: {
      create: {
        facebook: "#",
        instagram: "#",
        webpage: "#",
      },
    },
  },
  {
    name: "Sztuka chleba i wina",
    address: "Krakowska",
    info: "U nas znajdziesz najlepsze chałki i wina na udany weekend.",
    socialMediaLinks: {
      create: {
        facebook: "#",
        instagram: "#",
        webpage: "#",
      },
    },
  },
  {
    name: "SzwieŻo upieczona",
    address: "Cystersów",
    info: "Super piekarnia w Krakowie",
    socialMediaLinks: {
      create: {
        facebook: "#",
        instagram: "#",
        webpage: "#",
      },
    },
  },
];

async function main() {
  // bakeries
  await prisma.bakery.deleteMany();
  console.info("Bakery table deleted from db");
  await prisma.socialMediaLinks.deleteMany();
  console.info("Social media links table deleted from db");

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
