import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z
    .string()
    .min(50, "Description must be at least 50 characters.")
    .max(2000, "Description must be less than 2000 characters."),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters.")
    .max(50, "Location must be less than 50 characters"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});

export const feedbackFormSchema = z.object({
  name: z.string().min(3, "Title must be at least 3 characters."),
  message: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(400, "Description must be less than 400 characters."),
});
