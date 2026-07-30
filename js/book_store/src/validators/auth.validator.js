import { generalSchema } from "./general.validator.js";
import z from "zod";

export const registerSchema = generalSchema.extend({
  name: z.string().trim().min(3, "Name must be at least 3 characters").max(100),
  phone: z
    .string()
    .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
});

export const loginSchema = generalSchema;
export const refreshSchema = z.object({
  refreshToken: z.string(),
});
