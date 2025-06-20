import {z} from "zod";

export const SolutionSchema = z.array(
  z.object({
    url: z.string().url(),
    value: z.string(),
  }),
);

export type SolutionSchema = z.infer<typeof SolutionSchema>;
