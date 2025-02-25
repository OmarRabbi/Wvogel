import { z } from "zod";

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
    newconfirmpassword: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
    conformpassword: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords do not match",
  });
