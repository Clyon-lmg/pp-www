# Peptide Planner – Landing (Next.js + Tailwind)

This is a minimal Next.js (App Router) project with Tailwind, ready to deploy on Vercel or run locally on Windows/VS2022.

## What’s included
- Next.js (App Router) with `app/page.tsx`
- TailwindCSS preconfigured
- `lucide-react` icons
- Your landing component with compliance banner and future‑feature labels

## Quickstart (Windows + VS2022)
1. Install Node.js LTS (if you don’t have it).
2. Open **Developer PowerShell** inside this folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
   Open http://localhost:3000

4. Deploy to Vercel (from this folder):
   ```bash
   npm i -g vercel
   vercel
   vercel --prod
   ```

## Files you’ll edit most
- `app/(components)/PeptidePlannerLanding.tsx` – the landing UI
- `app/page.tsx` – renders the landing
- `app/globals.css` – add any global styles

## Notes
- Compliance banner text: **Research use only — peptides are not for human consumption.**
- Order Tracking and Provider Suggestions are marked **Coming Soon**.
- Cart text mentions **coupon/discount** prices already applied. No affiliate wording.
- Light/Dark toggle included.
