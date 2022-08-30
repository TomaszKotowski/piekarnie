import { z } from "zod";

export const addBakerySchema = z.object({
  name: z.string(),
  info: z.string(),
  address: z.string(),
  socialMediaLinks: z.object({
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
    webpage: z.string().url().optional(),
  }),
});
