/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fakerBakery = () => ({
  name: faker.company.name(),
  address: `${faker.address.streetAddress(true)}, ${faker.address.cityName()}`,
  info: faker.lorem.lines(2),
  socialMediaLinks: {
    create: {
      facebook: "#",
      instagram: "#",
      webpage: "#",
    },
  },
});

const fakerRounds = 10;

async function main() {
  // bakeries
  await prisma.bakery.deleteMany();
  console.info("Bakery table deleted from db");
  await prisma.socialMediaLinks.deleteMany();
  console.info("Social media links table deleted from db");
  for (let index = 0; index < fakerRounds; index++) {
    await prisma.bakery.create({ data: fakerBakery() });
  }

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
