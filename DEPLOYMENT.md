# Deployment Checklist (Phase 6)

## Live app

**https://farabi-fusus.vercel.app**

## Pre-deploy (done)

- [x] Production build passes: `npm run build`
- [x] Build uses webpack (for PWA): `next build --webpack`
- [x] Node engine set: `>=18` in package.json
- [x] No TypeScript or lint errors

## Deploy to Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub.
2. **Add New** → **Project** → select **farabi-fusus**.
3. Leave defaults (Build: `npm run build`, Output: Next.js).
4. Click **Deploy**.
5. Your app will be at `https://farabi-fusus-*.vercel.app` (or your custom name).  
   **Current production URL:** [https://farabi-fusus.vercel.app](https://farabi-fusus.vercel.app)

## After first deploy

- [ ] Run **Lighthouse** (Chrome DevTools → Lighthouse): aim for 90+ on Performance, Accessibility, Best Practices, SEO.
- [ ] Test on a real device: install as PWA (Add to Home Screen).
- [ ] (Optional) Add **custom domain** in Vercel: Settings → Domains.
- [ ] (Optional) Add PWA icons: see [PWA_ICONS_TODO.md](./PWA_ICONS_TODO.md).

## Alternative: Cloudflare Pages

- Use the Cloudflare Next.js integration and connect your GitHub repo.
- Build command: `npm run build`
- Output: use the adapter/output recommended by Cloudflare for Next.js.

## Run production build locally

```bash
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000).
