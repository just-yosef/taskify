import { z } from "zod";

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters long")
      .max(100, "Full name is too long"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(128, "Password is too long")
      .regex(
        /(?=.*[A-Za-z])(?=.*\d)/,
        "Password must contain at least one letter and one number"
      ),
    confirmPassword: z.string(),
    role: z.enum(["client", "freelancer"]).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupFormValues = z.infer<typeof signupSchema>;
