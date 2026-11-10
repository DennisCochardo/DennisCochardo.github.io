# Dennis Cochardo portfolio

Next.js (App Router) + TypeScript + Tailwind CSS, exported as a static site for GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Edit content

- Contact links, pitch and quick facts: `lib/site.ts`
- Projects and case studies: `lib/projects.ts`
- Experience, skills, certifications: `app/about/page.tsx`
- Design tokens (colors, type scale): `app/globals.css`

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup: in the repo, go to Settings, Pages, and set Source to "GitHub Actions".
