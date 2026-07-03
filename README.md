# Pete's Marine Service

Marketing site for **Pete's Marine Service** — outboard repair, marine wiring, electronics, boat cleaning, and trailer service in Palm Beach Gardens, Florida.

**Live site:** https://romorris.github.io/Petes-Marine-Service2/

## Stack

- [Astro 5](https://astro.build/) static site
- GitHub Pages deployment via Actions
- Formspree contact form

## Development

```bash
npm install
npm run dev      # http://localhost:4321/Petes-Marine-Service2/
npm run build    # output → dist/
npm run preview  # preview production build
```

## Deploy

Push to `master` — GitHub Actions builds and deploys automatically.

Ensure **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions**.

## Project structure

```
src/
  components/   Header, ServiceCard, Icons
  layouts/      Layout.astro (SEO, schema)
  pages/        index.astro
  styles/       global.css
public/
  img/          WebP images
  favicon.svg
  robots.txt
```