# Fusus al-Hikma (فصوص الحکمة)

A responsive, multilingual web application presenting **Fusus al-Hikam** (Bezels of Wisdom) by Abu Nasr al-Farabi — 70 philosophical chapters on metaphysics, theology, and political philosophy, in Arabic, Persian, and English.

**Live app:** [https://farabi-fusus.vercel.app](https://farabi-fusus.vercel.app)

## About

This project aims to make al-Farabi's profound philosophical work accessible through a modern, beautifully designed Progressive Web App (PWA). Read the complete treatise chapter by chapter in three languages with offline support and mobile installation.

## Project Plan

See [PLAN.md](./PLAN.md) for the complete development roadmap, technical stack, and implementation phases.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **Content:** Static JSON files
- **PWA:** Service worker with offline support
- **Fonts:** Vazirmatn (Arabic/Persian), Inter (English)

## Development

```bash
npm install
npm run dev -- --webpack   # or: npm run dev (uses webpack by default)
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Phase 6)

### Deploy to Vercel (recommended)

1. **Push your code to GitHub** (already done if you cloned from [github.com/milad621/farabi-fusus](https://github.com/milad621/farabi-fusus)).

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub.

3. **Import the repository:**
   - Click **Add New…** → **Project**
   - Select the `farabi-fusus` repo
   - Vercel will detect Next.js automatically

4. **Configure (optional):**
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** leave default
   - **Install Command:** `npm install`

5. **Deploy** — Click **Deploy**. Your app will be live at `https://your-project.vercel.app`.

6. **Custom domain (optional):** In the project dashboard, go to **Settings** → **Domains** and add your domain.

### Build and run locally (production mode)

```bash
npm run build
npm start
```

### PWA icons before going live

For a complete PWA experience, add icon files to `public/`:

- `public/icon-192.png` (192×192)
- `public/icon-512.png` (512×512)

See [PWA_ICONS_TODO.md](./PWA_ICONS_TODO.md) for how to generate them from `public/icon.svg`.

### Lighthouse audit

After deployment, run a Lighthouse audit (Chrome DevTools → **Lighthouse** tab) to check Performance, Accessibility, Best Practices, and SEO. Target 90+ on each.

## Development Status

✅ **Phases 0–4 Complete** — Repository, app, chapters, search, PWA  
✅ **Phase 6** — Deployed at [farabi-fusus.vercel.app](https://farabi-fusus.vercel.app)

## License

Content: The philosophical text is a historical work in the public domain.  
Code: MIT License

## Acknowledgments

Persian translation and commentary by Mohi al-Din Mehdi Elahi Ghomshei, with notes by Seyyed Mahmoud Taheri (Ayat-e Eshraq Press).
