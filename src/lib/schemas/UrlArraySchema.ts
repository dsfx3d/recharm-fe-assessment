import {z} from "zod";

export const UrlArraySchema = z.object({
  urls: z.array(
    z.object({
      url: z
        .string()
        .url()
        .refine(value => value.startsWith("https://drive.google.com/"))
        .refine(value => new URL(value).pathname.length > 1),
    }),
  ),
});
export type UrlArraySchema = z.infer<typeof UrlArraySchema>;
