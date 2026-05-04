import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// every md/mdx under content/blog
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// frontmatter shape, checked at build time
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// comes in as a string, want a Date
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			videoUrl: z.string().url().optional(),
		}),
});

export const collections = { blog };
