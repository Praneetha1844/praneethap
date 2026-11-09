# ADR 0003: Static-first rendering with no tracking and no backend

- Status: accepted
- Date: 2026-11-09

## Context

The site presents a person's work to readers who may be reviewing many applications. It should load quickly, work without JavaScript for reading, respect privacy and have no operational burden.

## Decision

- Render every page statically at build time; `dynamicParams = false` for case studies.
- Use client components only where interaction requires them (the theme toggle).
- Include no analytics, advertising scripts, cookies or third-party embeds. Fonts are self-hosted by `next/font` at build time.
- Provide contact through a `mailto:` link rather than a form with a server endpoint.

## Consequences

- Fast, cacheable pages with a small JavaScript payload.
- No cookie banner, no personal data collected, no server to secure or keep running.
- No visitor analytics, so the effect of changes on readership cannot be measured; that is an accepted trade-off.
- Contact by e-mail relies on the visitor's mail client. A form could be added later with a managed service, at the cost of a third party handling the messages.
