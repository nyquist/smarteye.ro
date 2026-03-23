/**
 * Site root with trailing slash (e.g. "/" or "/smarteye.ro/").
 * Set Astro `base` when hosting under a subpath (GitHub Pages project site).
 */
export const siteBase = import.meta.env.BASE_URL.endsWith('/')
	? import.meta.env.BASE_URL
	: `${import.meta.env.BASE_URL}/`;

/** Internal URL for public assets and routes (no leading slash on `path`). */
export function sitePath(path: string): string {
	const clean = path.replace(/^\/+/, '');
	return clean ? siteBase + clean : siteBase;
}
