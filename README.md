# vinext-starter

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext).

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Included Shape

- edit site copy (services, benefits, FAQs, contact info, etc.) in
  `content/site-content.js` — it is the single source of truth, imported by
  both `app/page.tsx` (React preview) and `scripts/build-static.mjs` (the
  static build that actually ships)
- edit layout/markup/styling under `app/`
- `.openai/hosting.json` declares Sites metadata (project id)

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
