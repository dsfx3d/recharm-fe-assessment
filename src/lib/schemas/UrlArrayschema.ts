import {z} from "zod";

export const UrlArraySchema = z.object({
  urls: z.array(
    z.object({
      url: z.string().url("Enter a valid URL"),
    }),
  ),
});
export type UrlArraySchema = z.infer<typeof UrlArraySchema>;
