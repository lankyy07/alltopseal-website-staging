# REPLACE THE EXISTING ALL TOPSEAL WEBSITE — SAFE DEPLOYMENT GUIDE

## What this package IS (read first)

This ZIP contains **React/Vite source**, not ready-to-open HTML files. It has NO enclosing directory: extract it and upload the files in the repository ROOT. If Cloudflare continues publishing your old static `index.html` without `npm run build`, the new website will not load correctly.

**Do not delete your working production version before confirming the new build works.** The existing website can remain live while you test a Cloudflare preview / new Pages project.

## A. Back up your current GitHub website

1. Open the repo that currently feeds www.alltopseal.com.
2. Select `Code` -> `Download ZIP` as your copy of the live project (or clone it with GitHub Desktop).
3. Remember the last known-good commit ID. Optional: create a `backup-before-base44` branch.
4. Never delete the repository or disconnect your domain just to change the design.

## B. Upload source (prefer GitHub Desktop because there are more than 100 files)

1. Extract `ALL_TOPSEAL_REPLACEMENT_GITHUB_SOURCE.zip`. Do NOT upload this ZIP as the website.
2. In the local clone, replace the OLD site files with the EXTRACTED contents; `package.json`, `package-lock.json`, `vite.config.js`, `index.html`, `src/`, `public/` must be in the repository root.
3. Keep `.git` (if using a local clone). Remove the old `assets/` folder and obsolete `.html` files if they are solely part of your old website. **Do not delete unrelated deployment settings** until you inspect them.
4. Commit `Replace static site with ALL TOPSEAL React/Vite website` and push to `main` only after Cloudflare is set up to build the new project. For safer rollout, push first to a test branch to obtain a preview deployment.
5. Do not upload `node_modules/` or `dist/` to the source repo: Cloudflare installs dependencies and builds the `dist` output.

## C. Cloudflare setup (this is different from the previous static website)

In a GitHub-connected **Cloudflare Pages** project, set:

    Production branch: main
    Root directory: /  (repo root, if requested)
    Build command: npm run build
    Build output directory: dist
    Node version: 22 (22.12+)

Run `npm ci` if the UI supports an install command; otherwise the Pages build system installs dependencies from `package-lock.json` automatically. `public/_redirects` must be present in the published `dist` for legacy links and deep links to resolve.

If your dashboard says **Workers** and uses a deploy command / assets directory rather than Pages build settings, DO NOT blindly apply Pages instructions. Check whether its assets build output is `dist` and its deploy command is correct; use a Pages project or a correctly configured Worker assets deployment. Check the preview URL BEFORE switching the existing custom domain.

For **Workers Static Assets** (not Pages), Cloudflare also requires an explicit `assets.directory` and `assets.not_found_handling: single-page-application` in Wrangler configuration. See `deployment-examples/wrangler.worker-example.jsonc.txt`. Rename it to `wrangler.jsonc` in the repo root only after replacing the placeholder Worker name with your existing Worker name; then configure the Worker to build with `npm run build` and deploy with your current Wrangler deployment method. Do not create a new Worker under an invented name by mistake. Cloudflare documents this here: https://developers.cloudflare.com/workers/static-assets/routing/single-page-application/ .

**Avoid replacing a working production custom domain until the preview passes all checks.**

## D. Verify deployment (do not request Google indexing before this)

1. In Cloudflare, confirm the latest build status is Success and references the expected GitHub commit.
2. Use the preview / pages.dev URL first. Confirm:

    /
    /products
    /products/flange-gaskets
    /products/custom-gaskets
    /products/non-asbestos-gasket-sheets
    /products/sbr-rubber-sheets
    /products/rubberised-cork
    /products/gland-packing
    /products/sealing-rope-tape
    /industries
    /technical-resources
    /how-to-measure-a-gasket
    /about
    /request-quote
    /contact
    /sitemap.xml
    /robots.txt

3. On mobile, test nav/dropdowns, page load, all product images, tel, email, WhatsApp, and the RFQ form with an attachment.
4. Confirm the FormSubmit activation message (if it arrives) from mbuchi619@gmail.com. Check spam, then submit another RFQ. The form is NOT proven until a test actually reaches the email inbox.
5. Test legacy URLs (old pages should redirect to the clean route): `/products.html`, `/flange-gaskets.html`, `/custom-gaskets.html`, `/request-quote.html`.
6. When satisfied, publish as production / connect www.alltopseal.com. Recheck links and form on the real domain.
7. Only then resubmit `sitemap.xml` in Google Search Console, run live URL inspection, and review Google Ads landing-page URLs.

## E. Differences to watch out for

- Old site was plain `.html` + `assets/`; new site is `src/` + `public/` + Node/Vite build and `dist/` output. Double-clicking `index.html` in Windows will NOT preview the new site.
- URL paths change from `.html` (`/flange-gaskets.html`) to clean routes (`/products/flange-gaskets`). Redirect rules are included for the old URLs. Google and Google Ads may need their landing URLs updated after deployment.
- Page meta tags for product pages are client-side in this version. Google Search Console indexing can be slower than with individual pre-rendered HTML pages; monitor it carefully.
- RFQ now relies on FormSubmit, an external mail/form service. Attachments, activation and mail delivery must be tested. The site itself has no private database or Base44 backend.
- Product images are bundled locally; no Base44-hosted image required.
- Company name is Emma Onyeco Investment Company Limited; ALL TOPSEAL is the trading brand. The E. mark matches the older website; phone and contact details have been updated.
- The previous static repo files are not the new build output. Cloudflare must publish `dist`, NOT repository root.
- The ZIP is source only; npm build could not be verified in the offline packaging environment. A green Cloudflare build is a mandatory gate.

## F. Rollback (if anything fails)

Use Cloudflare Deployments -> select the previous successful production deployment -> rollback (if your project supports this), OR revert the replacement commit in GitHub to restore the previous static site and its matching Cloudflare build settings. Restore the old build configuration as well as the old files. Leave DNS and domain connections alone.
