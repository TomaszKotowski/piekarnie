import { createRouter } from "./context";

export const bakeryRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return ctx.prisma.bakery.findMany({
        include: { socialMediaLinks: true },
      });
    },
  })
  .query("getFirst", {
    async resolve({ ctx }) {
      return ctx.prisma.bakery.findFirst({
        include: { socialMediaLinks: true },
      });
    },
  });
