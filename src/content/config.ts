import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Callsun'),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    category: z.enum(['Technical', 'Product', 'Industry', 'Press', 'Sustainability']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    ctaTitle: z.string().optional(),
    ctaDescription: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
  }),
});

export const collections = { news };
