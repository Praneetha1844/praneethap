# Changelog

All notable changes to this project are documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.1.0] - 2026-11-09

### Added
- Single-page portfolio: hero, about, experience, projects, research interests, education and certifications, leadership and contact.
- Case-study pages for the featured projects, written in MDX and generated statically.
- Light and dark themes driven by CSS variables, applied before first paint to avoid a flash.
- Typed content modules under `src/content`, with tests for integrity (unique slugs, matching case-study files, repository links).
- Accessibility basics: skip link, landmarks, visible focus, labelled lists, new-tab announcements and reduced-motion support.
- Metadata: OpenGraph and Twitter tags, JSON-LD person data, sitemap and robots.
- Security headers and no analytics or third-party tracking.
- GitHub Actions workflow running lint, type check, tests and build.
