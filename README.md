# praneethap

Personal portfolio of Praneetha Potharaju: cloud and DevOps engineering, data-intensive systems and applied AI.

Intended address: <https://praneethap.vercel.app>

> **Status:** implementation and test suite included; the site has not been built or deployed from this repository yet. Project case studies describe design and scope; benchmarks are not yet published.

## Stack

- Next.js 15 (App Router), React 19, TypeScript in strict mode
- Tailwind CSS with CSS-variable design tokens
- MDX (`@next/mdx`) for project case studies
- Vitest and Testing Library, ESLint
- No analytics, no cookies, no third-party scripts; fonts are loaded through `next/font`

## Getting started

```bash
npm install          # also creates package-lock.json: commit it
npm run dev          # http://localhost:3000
npm run check        # lint, type check and tests
npm run build && npm start
```

Requires Node.js 20.9 or newer.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel choose **Add New → Project** and import the repository.
3. Keep the detected framework preset (**Next.js**); no build settings need changing.
4. Optional: set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) if the site will use another domain. Without it the site assumes `https://praneethap.vercel.app` for canonical URLs, the sitemap and `robots.txt`.
5. Project name `praneethap` gives the address `praneethap.vercel.app` if it is available on your account.

## Before publishing

- Put your CV at `public/cv.pdf`. The hero and contact sections link to `/cv.pdf`; until the file exists the link returns 404.
- Run `npm install` once and commit the generated `package-lock.json`, then add `cache: npm` and switch the install step to `npm ci` in `.github/workflows/ci.yml` (the npm cache needs a lock file).
- Read each project page and confirm it still matches the repository it describes.
- Check that every GitHub repository linked from the site exists and is public.
- Do not fill gaps with guesses: if a fact is not in your own CV or records, leave it out (the `location` of an experience entry is optional for this reason).

## Editing content

All text lives in `src/content`; components only render it.

| File | Controls |
|---|---|
| `profile.ts` | Name, role, positioning sentence, about paragraphs, links, skills, CV path |
| `experience.ts` | Roles and highlights |
| `projects.ts` | Project cards (featured and supporting) |
| `projects/<slug>.mdx` | The case study page for a featured project |
| `education.ts` | Education and certifications |
| `leadership.ts` | Leadership and awards |
| `research.ts` | Research interests |

To add a featured project: add an entry to `projects.ts` with `kind: "featured"` and `caseStudy: true`, then create `src/content/projects/<slug>.mdx`. The tests fail if a case-study file is missing or orphaned.

**Honesty rule for this site:** state only what is true and verifiable. Do not add performance numbers to a project until they have been measured and can be reproduced; the content tests reject numeric claims in featured summaries.

## Project structure

```
src/
  app/                  routes, layout, metadata, sitemap, robots
  components/           presentational components
  content/              typed data and MDX case studies
  lib/                  site URL, theme and project helpers
docs/                   architecture and decision records
```

## Documentation

- [Index](docs/index.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- Decision records: [typed content and MDX](docs/adr/0001-typed-content-and-mdx.md), [theme without a flash](docs/adr/0002-theme-via-css-variables-and-inline-script.md), [static-first, no tracking](docs/adr/0003-static-first-no-tracking.md)

## Accessibility

Skip link, semantic landmarks, one `h1` per page, visible focus styles, labelled lists, announcements for links that open a new tab, and `prefers-reduced-motion` support. Colour contrast was chosen for both themes but has not been measured with an automated audit yet; run Lighthouse or axe after the first deploy.

## Limitations

- No contact form; contact is by `mailto:` link to avoid running a backend.
- Content is edited in code, not through a CMS.
- A strict Content-Security-Policy is not set because the pre-paint theme script is inline (see ADR 0002).
- Lighthouse and accessibility scores have not been measured.

## Licence

Code: MIT, see [LICENSE](LICENSE). The text and personal information on the site remain the property of Praneetha Potharaju.
