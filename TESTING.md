# ALL TOPSEAL — prelaunch checks

- [ ] `npm ci && npm run build` succeeds (or Cloudflare build succeeds).
- [ ] Wrangler deploy succeeds with no `_redirects` loop.
- [ ] Homepage, `/products` and all product cards load on desktop and mobile.
- [ ] `/products/non-asbestos-gasket-sheets`, `/products/rubberised-cork`, `/products/gland-packing`, `/products/sealing-rope-tape` show the approved new imagery.
- [ ] `/products/spiral-wound-gaskets` shows outsourced supply and classes 150–1500; linked in catalogue, navigation and homepage.
- [ ] Spiral wound RFQ fields appear when that product is selected and are included in the received email.
- [ ] RFQ from staging remains on staging after submission; received email and attached PDF/image verified.
- [ ] Correct phone, email, legal and trading names, address, and WhatsApp destination.
- [ ] Deep-link refresh works; legacy clean and .html URLs redirect appropriately.
- [ ] `/sitemap.xml` contains the new spiral wound product.
- [ ] Production Worker name verified and rollback recorded before release.
