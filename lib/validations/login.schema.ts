import { z } from "zod";
//-----------------------
export const createLoginSchema = () =>
  z.object({
    identifier: z.string().refine(
      (value) =>
        /^[0-9]{11}$/.test(value) ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      {
        message:("The email address you provided is not registed") ,
      }
    ),

    password: z.string().min(6, {
      message: ("Password entered is incorrect"),
    }),
  });

export type LoginSchema = ReturnType<typeof createLoginSchema>;
