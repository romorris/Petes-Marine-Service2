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
3. Deploy:
   ```bash
   npm run deploy
   ```

### Connect petes-marine-service.com

In Cloudflare Dashboard → **Workers & Pages** → your `petes-marine-service` worker:

1. **Settings** → **Domains & Routes** → **Add Custom Domain**
2. Enter `petes-marine-service.com` and `www.petes-marine-service.com`
3. Cloudflare will configure DNS automatically if the domain is on your account

This replaces the old MkDocs site at that domain once DNS routes to the new Worker.

### CI/CD (optional)

Connect the GitHub repo in **Workers & Pages** → **Create** → **Import repository**:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

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