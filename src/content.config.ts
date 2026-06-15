import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date().optional(),
    image: z.string(),
    author: z.string().default("🌻 L'Équipe Borne Recharge Hérault"),
  })
});

export const collections = { guides };
