# Test commands (Node 22.12+)

```bash
npm ci
npm run build
npm run preview
```

Open the localhost address printed by `npm run preview`. Test all paths in the deployment guide. Note: Vite preview is a test server; it is not identical to Cloudflare routing. Check `_redirects` inside `dist` and verify real Cloudflare preview routes before production cutover.

Verify `index.html` remains in repo root, `src/` and `public/` exist, and no one has added the old static `*.html` files back to the root. Test one genuine FormSubmit enquiry end-to-end after deployment.
