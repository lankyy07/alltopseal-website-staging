# ALL TOPSEAL — staging, GitHub replacement, and production cutover

## 1. Keep production intact

Download ZIP of the existing live GitHub repository at its working commit. Note the last successful Cloudflare production deployment/commit and all custom domain routes. **Do not delete the production Worker or disconnect www.alltopseal.com.**

## 2. Replace the staging repository first

Use GitHub Desktop: clone `lankyy07/alltopseal-website-staging`, copy all contents from this release ZIP (not its ZIP file or an enclosing folder) into the cloned repository root, preserving `.git`, review the Changes tab, commit, and push to `main`. If the source ZIP has files removed in later releases, remove them from the clone too. Do not add node_modules/dist. Confirm `src/main.jsx`, `src/App.jsx`, `src/pages/products/SpiralWoundGaskets.jsx`, `public/assets/spiral-wound.webp`, and `wrangler.jsonc` exist.

## 3. Confirm Cloudflare Workers configuration

For the **staging** Worker, `wrangler.jsonc` has `name: alltopseal-website-staging`, `assets.directory: ./dist`, and SPA fallback. Build command: `npm run build`. Deploy command: `npx wrangler deploy --config wrangler.jsonc`. Root: `/`. Node.js 22. Keep www.alltopseal.com connected only to the existing production project.

## 4. Staging tests — required before production

Open `https://alltopseal-website-staging.mbuchi619.workers.dev` after its deployment succeeds. Test homepage, products, all 8 product details including the new spiral wound route, RFQ form, mobile navigation and assets. Test direct deep-link refresh. Submit one real RFQ with a file attachment; confirm activation and delivery to mbuchi619@gmail.com, including its attachments. The RFQ confirmation redirects back to the submitting host. Test legacy 301 redirects such as `/flange-gaskets.html` and `/flange-gaskets`. Check `sitemap.xml` and `robots.txt`. Validate the product descriptions against real inventory and sourcing capability before taking enquiries.

## 5. Production deployment — separate action

Only after staging works: clone or open the **existing production GitHub repository**, back it up, copy the tested release files into its root and check differences. **Change `wrangler.jsonc` `name` from `alltopseal-website-staging` to the exact existing production Worker name shown in Cloudflare.** Do not guess this value. Check existing bindings, routes, secrets, compatibility settings or domains and preserve any required production-only config. Confirm production build/deploy commands against the production project before commit/push. Your live domain remains on the old site until the production deployment succeeds; validate homepage, product URLs, redirects and RFQ immediately after deployment.

If production is Cloudflare Pages or has a different deployment model, do not use this Worker config without migration review. If the production Worker name or config is unknown, stop and check Settings/Deployments first.

## 6. Rollback

If significant issues arise, use the recorded last successful production deployment in Cloudflare to roll back, or revert the GitHub commit and redeploy. Never point the staging Worker at the live custom domain as a workaround.

## Risks to check

This is a client-rendered React SPA with JS-generated SEO metadata, unlike the previous standalone HTML pages. Old paths are redirected to the new nested `/products/...` routes. FormSubmit is an external email-delivery service and must be tested live; successful build does not prove email delivery. The images are illustrative and do not establish exact technical material specifications.
