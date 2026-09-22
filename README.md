# Emma Onyeco Investment Company Limited — ALL TOPSEAL

This is the **GitHub source** for the Base44-inspired multi-page website. It is a React / Vite site, **not** the static HTML site previously hosted on alltopseal.com.

## Quick start

- Node.js 22.12+ (or 20.19+)
- `npm ci`
- `npm run build`
- The output to publish is `dist/`, which Vite generates; do not upload `dist/` and `src/` together as your live site.

Cloudflare Pages (GitHub-connected): build command `npm run build`, output directory `dist`, root directory `/`, production branch `main`. The file `public/_redirects` is copied to the build output to redirect legacy `.html` pages and serve the React app on direct visits.

See **DEPLOY-AND-ROLLBACK.md** for the full replacement procedure and differences from the old website.

## Contact / identity

- Legal company: Emma Onyeco Investment Company Limited
- Public trading brand: ALL TOPSEAL
- Phone/WhatsApp: 0811 688 6306 / +2348116886306
- WhatsApp username: @alltopseal
- Orders and RFQs: mbuchi619@gmail.com
- Website: https://www.alltopseal.com
- Address: Zone D, Block 5, Shop 79, ASPAMDA, Lagos International Trade Fair Complex, Lagos-Badagry Expressway, Lagos State, Nigeria

## Before accepting orders

Confirm a test enquiry reaches the mailbox, including a drawing attachment; activate FormSubmit if requested. Changing the site alone does not activate the external mail-delivery service.

## Known limitation

The website is a client-rendered React single-page application with multiple routes; it does not include pre-rendered HTML for individual product URLs. Google may require JavaScript rendering to see page-specific metadata and content. The build has been statically inspected here, but cannot be run in this environment because npm registry access is unavailable. **A successful Cloudflare build and live route/form tests are required before switching the production domain.**
