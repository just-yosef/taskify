import z from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  budgetMin: z.coerce.number().min(1, "Minimum budget required"),
  budgetMax: z.coerce.number().min(1, "Maximum budget required"),
  duration: z.string().optional(),
  category: z.string().optional(),
});
