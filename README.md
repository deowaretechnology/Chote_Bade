# ChoteBade

Chhota Business, Bade Sapne. Aapki Digital Key.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Project structure

```
chotebade/
├── app/                        → every page (Next.js App Router — each
│   ├── page.tsx                   folder = a route, page.tsx = that
│   ├── layout.tsx                 route's content)
│   ├── globals.css
│   ├── problems/page.tsx
│   ├── solutions/page.tsx
│   ├── demos/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx     → /demos/salon, /demos/cafe, etc.
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx     → /case-studies/bloom-salon, etc.
│   ├── how-we-work/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/                 → shared UI (Navbar, Footer, cards, demos)
├── lib/                        → Sanity client, content fetchers, icons, utils
├── data/                       → local JSON fallback content
├── sanity-admin/
│   └── admin-chotebade/        → the Sanity Studio (CMS), a fully separate
│                                   project with its own package.json
└── public/
```

## Running the site

```
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # run the production build
```

## How content works (JSON ↔ Sanity)

Every dynamic list — Problems, Solutions, Demo Lab items, Why ChoteBade
cards, Process steps, About page text, and Case Studies — is read through
a fetcher in `lib/content.ts`. Each one:

1. Tries to read that content type from **Sanity**.
2. If Sanity isn't connected yet, or has no documents for that type, it
   silently falls back to the matching file in `data/*.json`.
3. The moment real documents exist in Sanity for a content type, the site
   automatically starts using Sanity instead — no code changes needed.

Right now, with no Sanity project connected, the whole site runs entirely
off the JSON files.

## Two types of work shown on the site

- **Demo Lab** (`/demos`) — four interactive example businesses (Salon,
  Jewellery, Cafe, Consultant). These are **not real clients** — they're
  working mini-demos that prove what ChoteBade can build. Each one has a
  try-it-yourself flow you can actually click through.
- **Case Studies** (`/case-studies`) — **real, delivered client projects**.
  Each one has a title, business info, address, a short summary, bullet
  point results, a longer written story, and a "View Live Site" button.
  Until real case studies exist, the site shows an honest "we're building
  our first case studies" message instead of fake ones.

Clicking a card in either section opens a full detail page for that
item — not just the card preview.

## Connecting Sanity (optional, do this whenever you're ready)

1. Go to **sanity.io**, create a free account and a new project (or run
   `cd sanity-admin/admin-chotebade && npx sanity init`, which needs you
   to log in — so it can't be done for you automatically).
2. Copy the **Project ID** it gives you.
3. In the project root, copy `.env.example` to `.env.local` and fill in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
4. Start the Studio to add content:
   ```
   cd sanity-admin/admin-chotebade
   npm install
   npm run dev
   ```
   This opens the CMS admin UI (usually at localhost:3333) where you add
   Problems, Solutions, Demo items, Case Studies, etc.
5. Restart the main site (`npm run dev` in the project root) — it will
   now pull from Sanity for any content type you've added documents to,
   and keep using the JSON fallback for anything you haven't touched yet.
