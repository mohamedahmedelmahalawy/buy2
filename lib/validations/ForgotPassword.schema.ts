import { z } from "zod";

export const createForgotPasswordSchema = () =>
  z.object({
    identifier: z.string().refine(
      (value) =>
        /^[0-9]{11}$/.test(value) ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      {
        message: "Invalid identifier",
      }
    ),
  });

export type ForgotPasswordSchema = ReturnType<typeof createForgotPasswordSchema>;