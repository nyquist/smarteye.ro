# Smarteye.ro 2026 (Astro)

Static Astro website prepared for GitHub Pages deployment.

## Local development

```sh
npm install
cp .env.example .env
# add PUBLIC_WEB3FORMS_ACCESS_KEY from https://web3forms.com
npm run dev
```

### Contact form (Web3Forms)

1. Create an access key at [web3forms.com](https://web3forms.com) and set `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env` (local) and in GitHub **Repository secrets** for production builds.
2. In the Web3Forms dashboard, turn on **hCaptcha** spam protection and **domain allowlist** for `smarteye.ro` (and your GitHub Pages preview host if needed).
3. The form uses client-side limits (session rate limits + minimum time on page) in addition to hCaptcha and honeypots to reduce abuse of free quota.

## Build

```sh
npm run build
npm run preview
```

## Deployment

- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Custom domain file: `public/CNAME` (`smarteye.ro`)
- In repository settings, enable **Pages** and select **GitHub Actions** as source.

### GitHub Pages URL (`https://USER.github.io/REPO/`)

Project sites are served **under the repo name**. Astro `base` must be `/REPO` so logos, CSS (`/_astro/...`), and links work.

- The workflow can set `PUBLIC_BASE_PATH` / `PUBLIC_SITE_URL`, **or**
- **`astro.config.mjs` auto-detects** on GitHub Actions: if `GITHUB_ACTIONS=true` and `GITHUB_REPOSITORY=owner/repo`, it uses base `/<repo>` (unless the repo is `*.github.io` for a user site).

For **local** builds, `base` stays `/`.

For a **custom domain** at the site root (`https://smarteye.ro/`), set `PUBLIC_BASE_PATH=/` and `PUBLIC_SITE_URL=https://smarteye.ro` for that deployment (or a dedicated workflow).

## Current structure

- `src/pages/index.astro` - Romanian home page
- `src/pages/en/index.astro` - English home page
- `src/pages/contact.astro` and `src/pages/en/contact.astro` - contact pages
- `src/data/packages.js` - package data used by the pages
