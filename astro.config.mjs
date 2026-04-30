// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	image: {
		responsiveStyles: true,
		layout: 'constrained',
		breakpoints: [640, 750, 828, 1080, 1280, 1668, 2048],
	},
});
