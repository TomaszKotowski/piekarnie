import { createRouter } from "./context";

export const bakeryRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return ctx.prisma.bakery.findMany();
    },
  })
  .query("getFirst", {
    async resolve({ ctx }) {
      return ctx.prisma.bakery.findFirst();
    },
  });
