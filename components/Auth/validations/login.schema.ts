import { z } from "zod";

// -----------------------

export const createLoginSchema = () =>
  z.object({
    identifier: z
      .string()
      .trim()
      .refine(
        (value) =>
          /^[0-9]{11}$/.test(value) ||
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        {
          message: "Please enter a valid email address or phone number.",
        }
      ),

    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

export type LoginSchema = ReturnType<typeof createLoginSchema>;