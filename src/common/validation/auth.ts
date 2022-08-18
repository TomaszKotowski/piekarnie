import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(12),
});

export const signUpSchema = loginSchema.extend({
  username: z.string(),
});

export type LoginType = z.infer<typeof loginSchema>;
export type SignUpType = z.infer<typeof signUpSchema>;
