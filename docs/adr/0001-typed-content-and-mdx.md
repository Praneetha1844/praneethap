# ADR 0001: Typed content modules and MDX instead of a CMS

- Status: accepted
- Date: 2026-11-09

## Context

The site is a personal portfolio with a handful of pages and a single editor. Options considered:

1. Hard-code text in components.
2. Use a headless CMS or database.
3. Keep content in typed TypeScript modules, and write long-form case studies in MDX.

## Decision

Option 3. Structured records (experience, education, projects) are typed objects in `src/content`. Case studies are MDX files imported by slug. Components contain no copy.

## Consequences

- **Safe edits.** The compiler catches missing fields, and tests catch broken relationships (a project without its case study, an orphaned MDX file, a repository link to the wrong account).
- **No backend.** Nothing to host, secure or pay for, and every page can be rendered at build time.
- **Review through version control.** Every wording change is a diff, which suits a site where accuracy matters.
- **Editing needs a code change.** That is acceptable for one editor, but would not suit a team of non-developers.
- **MDX is deliberately plain.** No frontmatter or remark plugins: metadata lives in `projects.ts`, which keeps a single source of truth and avoids extra build configuration that cannot be verified here.
