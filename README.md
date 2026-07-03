# Pete's Marine Service

Professional marketing site for **Pete's Marine Service** — outboard repair, marine wiring, electronics, boat cleaning, and trailer service in Palm Beach Gardens, Florida.

**Production domain:** https://petes-marine-service.com

## Stack

- [Astro 5](https://astro.build/) static site
- [Cloudflare Workers/Pages](https://developers.cloudflare.com/workers/) via Wrangler
- Formspree contact form

## Development

```bash
npm install
npm run dev          # http://localhost:4321/
npm run build        # output → dist/
npm run preview      # Astro preview
npm run preview:cf   # Build + Wrangler local preview
```

## Deploy to Cloudflare

### One-time setup

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Install Wrangler auth locally:
   ```bash
   npx wrangler login
   ```
3. Deploy to the existing Cloudflare Pages project:
   ```bash
   npm run deploy
   ```

This uploads the Astro build to the existing **`petes-marine-service`** Pages project, replacing the old MkDocs site on both `petes-marine-service.com` and `petes-marine-service.pages.dev`.

### CI/CD (GitHub Actions)

Add these repository secrets in GitHub → **Settings** → **Secrets**:

| Secret | Value |
|--------|-------|
| `CLOUDFLARE_API_TOKEN` | API token with **Cloudflare Pages Edit** permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

Push to `master` — `.github/workflows/deploy-cloudflare.yml` builds and deploys automatically.

## Project structure

```
src/
  components/   Header, Footer, ServiceCard, Icons
  layouts/      Layout.astro (SEO, schema)
  lib/          paths.ts (asset URL helper)
  pages/        index.astro
  styles/       global.css
public/
  img/          WebP images
  favicon.svg
  robots.txt
wrangler.jsonc  Cloudflare deploy config
```