// @ts-check
import { defineConfig } from 'astro/config';

/**
 * GitHub Pages project sites are served at https://OWNER.github.io/REPO/
 * All asset and internal URLs must use base `/REPO`.
 *
 * Set PUBLIC_BASE_PATH=/your-repo explicitly, or rely on CI auto-detect below.
 */
function resolveBasePath() {
	const explicit = process.env.PUBLIC_BASE_PATH?.trim();
	if (explicit && explicit !== '/') {
		return explicit.startsWith('/') ? explicit : `/${explicit}`;
	}
	// Fallback when workflow forgets PUBLIC_BASE_PATH: GitHub sets GITHUB_REPOSITORY=owner/repo
	if (process.env.GITHUB_ACTIONS === 'true' && process.env.GITHUB_REPOSITORY) {
		const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
		// User/org site repo "user.github.io" is published at domain root — base stays /
		if (repo && !/\.github\.io$/i.test(repo)) {
			return `/${repo}`;
		}
	}
	return '/';
}

const basePath = resolveBasePath();

const siteUrl =
	process.env.PUBLIC_SITE_URL?.trim() ||
	(process.env.GITHUB_ACTIONS === 'true' && process.env.GITHUB_REPOSITORY
		? `https://${process.env.GITHUB_REPOSITORY.split('/')[0]}.github.io`
		: 'https://smarteye.ro');

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	base: basePath,
	output: 'static'
});
