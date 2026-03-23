// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project sites: https://USER.github.io/REPO/ → PUBLIC_BASE_PATH=/REPO
// Custom domain at site root: leave unset or PUBLIC_BASE_PATH=/
let basePath = process.env.PUBLIC_BASE_PATH?.trim() || '/';
if (basePath !== '/' && !basePath.startsWith('/')) {
	basePath = `/${basePath}`;
}

// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_SITE_URL || 'https://smarteye.ro',
	base: basePath,
	output: 'static'
});
