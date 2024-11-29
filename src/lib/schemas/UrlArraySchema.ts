import {z} from "zod";

export const UrlArraySchema = z.object({
  urls: z.array(
    z.object({
      url: z
        .string()
        .url()
        .refine(value => value.startsWith("https://drive.google.com/")),
    }),
  ),
});
export type UrlArraySchema = z.infer<typeof UrlArraySchema>;
