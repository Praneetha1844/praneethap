# Roadmap

Nothing here is promised; it is the order in which known gaps would be closed.

## Before the first deploy

- Add the CV as `public/cv.pdf` (the links return 404 until it exists).
- Run `npm install` once, commit `package-lock.json`, then enable `cache: npm` and `npm ci` in
  the CI workflow.
- Read every project page against the repository it describes; the pages are written from the
  repositories' READMEs and may drift as the repositories change.

## After the first deploy

- Run Lighthouse and an accessibility checker (for example axe) on both themes, and record the
  results here. Contrast was chosen with care but has not been measured.
- Add a social preview image (`opengraph-image`) so shared links look intentional.
- Add real screenshots or architecture diagrams to the case studies once the projects have run.

## Content

- Replace the "not yet run" status on each project with measured results, but only together with
  the commands that reproduce them.
- Add a short publications or talks section if there is anything to list.

## Engineering

- Consider a Content-Security-Policy with a nonce for the theme script (see ADR 0002).
- Add an end-to-end smoke test (home page renders, a case study renders) once the project has a
  lock file and CI has run.
