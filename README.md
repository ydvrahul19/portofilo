# Rahul Kumar Yadav — Portfolio

Next.js (App Router) + Tailwind CSS portfolio.

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

## Before you deploy (checklist)
1. **Resume** — already included at `public/Rahul-Kumar-Yadav-Resume.pdf` (replace the file to update it).
2. **Contact form** — create a free account at https://resend.com, add `RESEND_API_KEY` in `.env.local` (and in Vercel → Project → Environment Variables). Messages are delivered to the email set in `app/site.ts`.
3. **Site URL** — set `NEXT_PUBLIC_SITE_URL` to your real domain (used for SEO, sitemap and link previews).
4. **Projects** — fill in `github` and `demo` for each project in `app/components/Projects.tsx`. Buttons only appear when a link is set.
5. **Contact details** — all email/phone/social links live in `app/site.ts`.

## Deploy
Push to GitHub and import the repo in Vercel.
