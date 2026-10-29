import { z } from "Zod";

export const EmployeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().int().positive("Age must be a positive number"),
  country: z.string().min(1, "Country is required"),
  img: z.string().url("Img must be a valid URL string"),
});
export type Employee = z.infer<typeof EmployeeSchema>;

export const SEARCHABLE_FIELDS = [
  "name",
  "age",
  "country",
] as const satisfies (keyof Employee)[];
