// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const allowedHosts = process.env.ALLOWED_HOSTS
	? process.env.ALLOWED_HOSTS === 'true'
		? true
		: process.env.ALLOWED_HOSTS.split(',').map((host) => host.trim()).filter(Boolean)
	: [];

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? 'http://localhost:4321',
	server: {
		allowedHosts,
	},
	integrations: [mdx(), sitemap()],
	image: {
		responsiveStyles: true,
		layout: 'constrained',
		breakpoints: [640, 750, 828, 1080, 1280, 1668, 2048],
	},
});
