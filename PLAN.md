# Fusus al-Hikma (فصوص الحکمة) — Web App Project Plan

## Project Overview

A responsive web application presenting the book **Fusus al-Hikam** (فصوص الحکم / Bezels of Wisdom), attributed to **Abu Nasr al-Farabi** (c. 870–950 CE), chapter by chapter in three languages: Arabic, Persian, and English. The app should work seamlessly in a browser and be installable as a Progressive Web App (PWA) for mobile home-screen access.

---

## About the Book

**Fusus al-Hikam** (فصوص الحکم) — also transliterated as **Fusus al-Hikma** (فصوص الحکمة) — is a short philosophical and theological treatise attributed to Abu Nasr Muhammad al-Farabi (known as the "Second Teacher" after Aristotle). It consists of **70 concise chapters** (fusus/aphorisms) that systematically address:

- The existence and attributes of the Necessary Being (Wajib al-Wujud / واجب‌الوجود)
- Divine simplicity, unity, and transcendence
- The emanation of intellects and celestial spheres
- The Active Intellect and its role in human knowledge
- Prophecy, revelation, and the philosopher-prophet
- The Virtuous City (al-Madina al-Fadila) and political philosophy
- Human happiness and the fate of the soul after death

### Attribution Note

Scholarly sources note that authorship is disputed — some consider it authentically Farabian, others classify it as pseudo-Farabian. Max Horten produced a substantial commentary on it. A Persian translation and commentary was done by Mohi al-Din Mehdi Elahi Ghomshei, with supplementary notes by Seyyed Mahmoud Taheri, published by Ayat-e Eshraq Press.

### Content Accuracy Disclaimer

The chapter content stored in this project is derived from summarized paraphrases (not a critical edition of the original manuscript). While the thematic content of each chapter accurately reflects Farabian metaphysical themes, the Arabic text is a reconstructed summary, not a verbatim transcription from a manuscript. Future phases should aim to replace this with content from a critical edition if/when available.

---

## Tech Stack (Recommended)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js** (App Router) | SSG for fast loading, good SEO, React ecosystem |
| Styling | **Tailwind CSS** | Utility-first, excellent RTL support, responsive |
| PWA | **next-pwa** or `@serwist/next` | Service worker, offline support, installable |
| Content | **JSON files** (static) | No DB needed, easy to update, git-versioned |
| Deployment | **Vercel** or **Cloudflare Pages** | Free tier, CDN, fast globally |
| Font | **Vazirmatn** (Persian/Arabic), **Inter** (English) | Excellent RTL rendering |

---

## Phase Breakdown

---

### Phase 0: Repository & GitHub Setup
**Goal:** Initialize the git repo, push to GitHub, and establish project hygiene.

**Tasks:**
1. `git init` and create `.gitignore` (Node/Next.js template)
2. Create the GitHub repository (public or private)
3. Push the initial commit with `PLAN.md` and `content/` files
4. Add a `README.md` with project name, one-line description, and a link to `PLAN.md`
5. (Optional) Set up branch protection rules, issue labels for phases

**Deliverables:**
- GitHub repo live with initial content
- Clean commit history started

---

### Phase 1: Project Scaffold & Configuration

#### Phase 1A: Project Setup
**Goal:** Initialize the framework and tooling.

**Tasks:**
1. Initialize Next.js project with TypeScript (`npx create-next-app@latest --typescript`)
2. Configure Tailwind CSS (included in latest Next.js, but verify `tailwind.config.ts`)
3. Create the folder structure as defined in the directory layout below
4. Add a basic `layout.tsx` with HTML `lang` attribute and a placeholder `page.tsx`
5. Verify the dev server runs and a blank page loads

**Deliverables:**
- `npm run dev` works, blank page renders at `localhost:3000`
- Folder structure in place

#### Phase 1B: Content Integration & Fonts
**Goal:** Wire up the book data and configure multilingual font rendering.

**Tasks:**
1. Move `content/chapters.json` and `content/book-description.json` into the project (or import from current location)
2. Create `src/lib/chapters.ts` — utility functions to load chapters by ID, list all, filter by section
3. Install and configure fonts:
   - **Vazirmatn** for Persian/Arabic (via `next/font/google` or local file)
   - **Inter** for English (via `next/font/google`)
4. Set up RTL/LTR support:
   - Add `dir="rtl"` to Arabic/Persian text containers
   - Configure Tailwind RTL plugin or use logical properties (`ps-`, `pe-`, `ms-`, `me-`)
5. Create a test page that renders one chapter in all three languages to verify fonts and direction

**Deliverables:**
- Chapter data accessible via utility functions
- Fonts rendering correctly for Arabic, Persian, and English
- RTL/LTR verified visually

#### Phase 1C: Landing Page
**Goal:** Build the home page — the first thing users see.

**Tasks:**
1. Build the hero section:
   - Book cover image (or an elegant placeholder with Islamic geometric / calligraphy styling)
   - Book title in all three languages (فصوص الحکم / فصوص الحکمه / Bezels of Wisdom)
   - Author name in all three languages
2. Add the description/about section:
   - Short bilingual (Persian + English) description of the book
   - Attribution note (subtle, at the bottom)
3. Add call-to-action buttons:
   - "Start Reading" → links to `/chapters/1`
   - "Table of Contents" → links to `/chapters`
4. Style the page: warm parchment tones, gold accents, generous whitespace

**Deliverables:**
- Polished landing page at `/`
- All text rendering correctly in three languages

#### Phase 1D: Navigation & Responsive Layout
**Goal:** Build the shell that wraps all pages.

**Tasks:**
1. Build `Navbar` component:
   - Site title / logo (text-based, bilingual)
   - Links: Home, Chapters
   - Hamburger menu for mobile
2. Integrate navbar into root `layout.tsx`
3. Mobile-first responsive design pass:
   - Test on 320px, 375px, 768px, 1024px+ widths
   - Ensure RTL text doesn't break on small screens
4. Add a simple footer (author credit, project link)

**Deliverables:**
- Responsive navbar working on all screen sizes
- Footer in place
- Full landing page experience complete

---

### Phase 2: Chapter List & Chapter Reader

#### Phase 2A: Table of Contents Page
**Goal:** Let users browse all 70 chapters.

**Tasks:**
1. Build the Table of Contents page at `/chapters`:
   - List all 70 chapters with chapter number and title (in all 3 languages)
   - Group by thematic section (Theology, Cosmology, Epistemology, Politics, Eschatology)
   - Section headers with descriptions
   - Click any chapter → navigate to `/chapters/[id]`
2. Style chapter cards: number badge, title in primary language, secondary language subtitle
3. Add a mini-progress indicator if coming back from reading (future-proof)

**Deliverables:**
- Working chapter list at `/chapters`
- Clean, scannable layout with section groupings

#### Phase 2B: Chapter Detail Page — Content Display
**Goal:** Build the core trilingual reading view.

**Tasks:**
1. Build the Chapter Detail page at `/chapters/[id]`:
   - Chapter number and title (all three languages)
   - Three-language content display:
     - **Arabic** text block (RTL, `dir="rtl"`, distinct styling — slightly larger font, classical feel)
     - **Persian** text block (RTL, `dir="rtl"`)
     - **English** text block (LTR, `dir="ltr"`)
   - Default layout: **Stacked** (Arabic → Persian → English), good for mobile
   - Each language block visually distinct (subtle background tint or left/right border accent)
2. Static generation: use `generateStaticParams()` to pre-render all 70 chapter pages
3. Handle edge cases: chapter 0 (doesn't exist), chapter 71 (doesn't exist)

**Deliverables:**
- All 70 chapter pages rendering at `/chapters/1` through `/chapters/70`
- Clean trilingual layout

#### Phase 2C: Chapter Navigation & Reading UX
**Goal:** Make it easy to move between chapters.

**Tasks:**
1. Build `ChapterNavigation` component:
   - Previous / Next buttons at bottom of chapter
   - "Back to Table of Contents" link
   - Disable "Previous" on chapter 1, "Next" on chapter 70
2. Add reading progress indicator: "Chapter X of 70" with a thin progress bar
3. Scroll-to-top on chapter navigation
4. (Desktop) Optional side-by-side display mode toggle (2 or 3 columns)

**Deliverables:**
- Seamless chapter-to-chapter navigation
- Progress feedback for the reader

---

### Phase 3: Search
**Goal:** Let users find content across all chapters.

**Tasks:**
1. Implement client-side full-text search:
   - Search input with debounced query
   - Search across Arabic, Persian, and English text simultaneously
   - Display results as a list of matching chapters with highlighted snippets
   - Click a result → navigate to that chapter
2. Build as either:
   - A dedicated `/search` page, or
   - A modal/overlay triggered from the navbar (better UX)
3. Handle empty states, no-results, and RTL text in search input

**Deliverables:**
- Working trilingual search
- Accessible from any page via navbar

---

### Phase 4: PWA & Installability
**Goal:** Make the app installable on phones and work offline.

**Tasks:**
1. Configure PWA tooling (`@serwist/next` or `next-pwa`):
   - Generate `manifest.json` (app name, short name, icons, theme color, background color)
   - Set up service worker for precaching all static pages and chapter data
2. Create app icons:
   - Multiple sizes: 72, 96, 128, 144, 152, 192, 384, 512px
   - Apple touch icon for iOS
   - Favicon set
3. Splash screen configuration for iOS and Android
4. Test "Add to Home Screen" flow on iOS Safari and Android Chrome
5. Verify offline mode: kill network, confirm all chapters still load

**Deliverables:**
- Installable as a home-screen app on iOS and Android
- Full offline support after first visit
- Proper icons and splash screens

---

### Phase 5: Visual Polish & UX Enhancements
**Goal:** Refine the experience from "works" to "delightful."

#### Phase 5A: Theming & Preferences
**Tasks:**
1. Dark mode / Light mode toggle:
   - Persist preference in `localStorage`
   - Respect system preference (`prefers-color-scheme`) as default
   - Smooth transition between modes
2. Font size adjustment (small / medium / large):
   - Persist in `localStorage`
   - Apply to Arabic/Persian/English independently if needed
3. Language filter toggle: show/hide specific languages per user preference
   - e.g., "Show only Arabic + English" — persist in `localStorage`

**Deliverables:**
- Dark/light mode with persistence
- Font size controls
- Language visibility toggle

#### Phase 5B: Interaction & Accessibility
**Tasks:**
1. Keyboard navigation: left/right arrow keys for prev/next chapter
2. Share button:
   - Mobile: native Web Share API
   - Desktop: copy link to clipboard with toast notification
3. Print-friendly stylesheet (clean, single-language or all-languages print)
4. Accessibility audit:
   - ARIA labels on interactive elements
   - Semantic HTML (`<article>`, `<nav>`, `<main>`, `<aside>`)
   - Color contrast check (WCAG AA minimum)
   - Focus indicators for keyboard users
5. SEO metadata:
   - Open Graph tags per chapter (title, description, image)
   - Structured data (JSON-LD) for the book and chapters
6. Loading skeleton states for chapter transitions

**Deliverables:**
- Keyboard-navigable
- Shareable
- WCAG AA accessible
- SEO-optimized with OG tags

---

### Phase 6: Deployment & Launch
**Goal:** Get the app live on a public URL.

**Tasks:**
1. Choose and configure hosting:
   - **Vercel** (recommended for Next.js — zero-config deploy)
   - Or **Cloudflare Pages** (alternative, good global CDN)
2. Set up custom domain (if desired)
3. Configure production build optimizations:
   - Verify static export / ISR settings
   - Check bundle size, lighthouse score
4. Run a final cross-browser test: Chrome, Safari, Firefox (desktop + mobile)
5. Run Lighthouse audit — target 90+ on Performance, Accessibility, Best Practices, SEO
6. Announce / share the link

**Deliverables:**
- Live public URL
- Lighthouse score 90+ across categories
- Tested on major browsers and devices

---

### Phase 7: Advanced Features (Future)
**Goal:** Features to add if and when desired.

**Tasks:**
1. User accounts and personalization:
   - Bookmarks / favorites
   - Reading progress tracking (resume where you left off)
   - Notes per chapter
2. Audio recitation of Arabic text (if recordings are available)
3. Commentary toggle: show/hide scholarly commentary per chapter
4. Multiple translation sources (different Persian/English translations side by side)
5. Export: download individual chapters or the full book as PDF
6. Analytics: basic usage tracking (privacy-respecting, e.g., Plausible or Umami)
7. Multilingual UI: the app interface itself in FA/EN/AR (not just the content)
8. Content correction workflow: allow scholars to submit corrections via GitHub Issues or a form
9. Social features: share a specific passage with highlighted text

---

## Content Data Structure

All chapter content is stored in `content/chapters.json`. The structure:

```json
{
  "book": {
    "title": {
      "ar": "فصوص الحکم",
      "fa": "فصوص الحکمه",
      "en": "Fusus al-Hikam (Bezels of Wisdom)"
    },
    "author": {
      "ar": "أبو نصر الفارابي",
      "fa": "ابونصر فارابی",
      "en": "Abu Nasr al-Farabi"
    },
    "description": {
      "ar": "...",
      "fa": "...",
      "en": "..."
    }
  },
  "chapters": [
    {
      "id": 1,
      "title": {
        "ar": "في إثبات وجود واجب الوجود",
        "fa": "در اثبات وجود واجب‌الوجود",
        "en": "On Proving the Existence of the Necessary Being"
      },
      "section": "theology",
      "content": {
        "ar": "...",
        "fa": "...",
        "en": "..."
      }
    }
  ]
}
```

### Thematic Sections (for grouping in table of contents)

| Section | Chapters | Theme |
|---------|----------|-------|
| `theology` | 1–21 | Existence, unity, simplicity, attributes of the Necessary Being |
| `cosmology` | 22–27 | Emanation of intellects and celestial spheres |
| `epistemology` | 28–35 | Active Intellect, prophecy, revelation, philosophy & religion |
| `politics` | 36–65 | The Virtuous City, leadership, justice, society, arts, education |
| `eschatology` | 66–70 | Soul, death, afterlife, ultimate purpose of philosophy |

---

## File / Directory Structure

```
farabi_fosous/
├── PLAN.md                          # This file
├── content/
│   ├── book-description.json        # Book metadata and descriptions
│   └── chapters.json                # All 70 chapters (AR/FA/EN)
├── public/
│   ├── images/
│   │   └── book-cover.jpg           # Book cover image (Phase 1)
│   ├── icons/                       # PWA icons (Phase 3)
│   └── manifest.json                # PWA manifest (Phase 3)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout (fonts, RTL setup)
│   │   ├── page.tsx                 # Landing page
│   │   ├── chapters/
│   │   │   ├── page.tsx             # Table of Contents
│   │   │   └── [id]/
│   │   │       └── page.tsx         # Chapter detail view
│   │   └── search/
│   │       └── page.tsx             # Search page (Phase 3)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ChapterCard.tsx
│   │   ├── ChapterContent.tsx       # Three-language chapter display
│   │   ├── ChapterNavigation.tsx    # Prev/Next buttons
│   │   ├── LanguageToggle.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── SearchBar.tsx
│   ├── lib/
│   │   ├── chapters.ts              # Data loading utilities
│   │   └── search.ts                # Search logic
│   └── styles/
│       └── globals.css              # Tailwind + custom styles
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Design Guidelines

### Color Palette
- **Primary:** Deep teal / emerald (#0D7377 or similar) — evokes Islamic geometric art
- **Secondary:** Warm gold (#C9A84C) — classical manuscript accents
- **Background (light):** Warm off-white (#FAF8F5) — parchment-like
- **Background (dark):** Deep charcoal (#1A1A2E)
- **Text:** Near-black (#1C1C1C) for readability

### Typography
- **Arabic/Persian:** Vazirmatn (or Amiri for a more classical feel)
- **English:** Inter or Source Serif Pro
- Arabic text should be slightly larger (1.1–1.2x) than English for readability
- Generous line height for Arabic/Persian (1.8–2.0)

### Layout Principles
- Mobile-first: single-column stacked layout by default
- Desktop: option for side-by-side bilingual/trilingual columns
- Clear visual separation between language blocks (subtle borders or background tints)
- Chapter numbers displayed prominently in both Arabic-Indic (٧٠) and Western (70) numerals

---

## Implementation Notes

1. **Static Generation**: All pages can be statically generated at build time since content is fixed JSON. No API routes needed for Phase 1–4.
2. **RTL Support**: Use `dir="rtl"` on Arabic/Persian text containers. Tailwind's RTL plugin can handle directional utilities.
3. **Font Subsetting**: Arabic/Persian fonts can be large — use `font-display: swap` and subset if possible.
4. **Image Optimization**: Use Next.js `<Image>` component for the book cover.
5. **No Database**: All data lives in JSON files checked into git. This simplifies deployment and makes the app fully static.

---

## Milestones & Timeline (Estimated)

| Phase | Sub-phase | Effort | Description |
|-------|-----------|--------|-------------|
| **Phase 0** | — | 30 min | GitHub repo setup |
| **Phase 1** | 1A | 1–2 hrs | Project scaffold (Next.js + Tailwind + TS) |
| | 1B | 2–3 hrs | Content integration, fonts, RTL/LTR |
| | 1C | 2–3 hrs | Landing page (hero, description, CTAs) |
| | 1D | 1–2 hrs | Navbar, responsive layout, footer |
| **Phase 2** | 2A | 2–3 hrs | Table of contents page |
| | 2B | 3–4 hrs | Chapter detail page (trilingual display) |
| | 2C | 1–2 hrs | Chapter navigation, progress bar |
| **Phase 3** | — | 3–4 hrs | Trilingual search |
| **Phase 4** | — | 3–4 hrs | PWA, icons, offline, installability |
| **Phase 5** | 5A | 2–3 hrs | Dark mode, font size, language filter |
| | 5B | 3–4 hrs | Keyboard nav, share, accessibility, SEO |
| **Phase 6** | — | 1–2 hrs | Deployment & launch |
| **Phase 7** | — | Ongoing | Advanced features (bookmarks, audio, etc.) |

**MVP (Phases 0–3): ~2–3 days**
**Full polish (through Phase 6): ~4–6 days**
