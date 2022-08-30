import { addBakerySchema } from "@/types/bakery";

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
  })
  .mutation("addBakery", {
    input: addBakerySchema,
    resolve({ ctx, input }) {
      return ctx.prisma.bakery.create({
        data: {
          name: input.name,
          address: "",
          info: input.info,
          socialMediaLinks: {
            create: {
              facebook: "#",
              instagram: "#",
              webpage: "#",
            },
          },
        },
      });
    },
  });
