import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .email("Invalid email address")
        .min(5, "Email is too short"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(128, "Password is too long"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
