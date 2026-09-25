# ALL TOPSEAL — GitHub / Cloudflare Workers staging source

Legal company: Emma Onyeco Investment Company Limited. Trading name: ALL TOPSEAL.

**This package is the React/Vite SOURCE, not a built HTML-only website.** All project files are at the ZIP root, ready to place in an existing repository root. It contains no `node_modules` or `dist`. Do not upload the ZIP file itself to GitHub. The named `wrangler.jsonc` targets **only** the existing `alltopseal-website-staging` Worker. Do not deploy it to the live production Worker without first changing the `name` to the confirmed exact production Worker name.

### Staging settings

- Repository: `lankyy07/alltopseal-website-staging` (confirm the actual current repo in GitHub)
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --config wrangler.jsonc` (plain `npx wrangler deploy` also works when Wrangler auto-detects this config)
- Root directory: repository root (`/`)
- Worker output: `dist/` (set in `wrangler.jsonc`)
- Node.js: 22

The SPA fallback is configured in `wrangler.jsonc`. The `_redirects` file contains only legacy 301 redirects, **no `/* /index.html 200` rewrite** that previously failed deployment.

### Changes

New locally bundled catalogue imagery for non-asbestos gasket sheets, rubberised cork, gland packing, and braided fibreglass rope; new spiral wound gasket image and an **outsourced-supply** product page for classes 150–1500 (subject to specification, sourcing and lead time). Product and RFQ navigation updated. Sitemap includes the new spiral wound page. RFQ confirmation remains on the domain where the form was submitted (staging or production).

### Before live launch

Run `npm ci && npm run build` in a network-enabled environment, then test the Cloudflare staging URL. Test the RFQ via FormSubmit (including multiple drawing attachments where used), inspect the delivered email, check catalogue images, confirm redirects and mobile navigation. The new images are illustrative; confirm exact material grade/appearance with supplier datasheets for customer specifications. After staging approval, back up the live repository and change the Wrangler `name` to the existing **production Worker name** before deploying there. See `DEPLOY-AND-ROLLBACK.md`.
