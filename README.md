# Shaurya Agrawal — AI Data Engineer Portfolio

A premium, production-ready personal portfolio built for technical credibility, targeted at technical recruiters and hiring managers.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Animations:** Framer Motion
- **Icons:** Lucide React + custom inline SVGs (for brands)
- **Language:** TypeScript

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000).

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Placeholder Content to Replace

Before deploying, please update the following placeholders:

1. **Resume PDF:** 
   - Add your resume to `public/resume.pdf`
   - Path configured in `src/lib/data.ts` (`siteConfig.resumeUrl`)

2. **Profile Photo:**
   - Go to `src/components/About.tsx`
   - Find the `<div className="w-40 h-40...` placeholder
   - Uncomment the `next/image` example and use your photo (e.g., `public/profile.jpg`)

3. **Social Links & Domain:**
   - Update `github` and `linkedin` URLs in `src/lib/data.ts` (`siteConfig`)
   - Update the placeholder domain URL in `src/app/layout.tsx` (OpenGraph config)

4. **Project Links (Optional):**
   - If your projects become public, add `liveUrl` and/or `repoUrl` to the project objects in `src/lib/data.ts`

5. **Contact Form Email Service:**
   - Go to `src/components/Contact.tsx`
   - The form currently simulates a delay and shows a success message. Read the `TODO` comment there to wire it up to Formspree, Resend, or EmailJS.

6. **OpenGraph Image:**
   - Create a `1200x630px` social share image
   - Place it at `public/og-image.png`
   - Uncomment the `images` array in `src/app/layout.tsx`

## Vercel Deployment

This project is fully optimized for Vercel.

1. Push this repository to GitHub.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Leave the default framework settings (Next.js will be auto-detected).
5. Click **Deploy**.

*(Vercel will automatically handle Next.js App Router static/dynamic rendering.)*
