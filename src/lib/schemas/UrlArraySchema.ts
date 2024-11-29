import {z} from "zod";

export const UrlArraySchema = z.object({
  urls: z.array(
    z.object({
      url: z
        .string()
        .url()
        .refine(value => value.startsWith("https://drive.google.com/"))
        .refine(value => {
          try {
            const url = new URL(value);
            return url.pathname.length > 1;
          } catch {
            return false;
          }
        }),
    }),
  ),
});
export type UrlArraySchema = z.infer<typeof UrlArraySchema>;
