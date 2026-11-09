# ADR 0002: Theme through CSS variables and a pre-paint inline script

- Status: accepted
- Date: 2026-11-09

## Context

A light and dark theme should follow the visitor's preference, remember an explicit choice, and never flash the wrong colours on load. A purely client-side toggle sets the theme after React hydrates, which causes a visible flash for visitors who prefer dark mode.

## Decision

- Define colours as CSS variables (space-separated RGB channels) on `:root` and `:root[data-theme="dark"]`.
- Map them into Tailwind colours using `rgb(var(--token) / <alpha-value>)`, so utilities such as `bg-bg/90` and `text-muted` work in both themes.
- Inline a tiny script in `<head>` that reads `localStorage` (falling back to `prefers-color-scheme`) and sets `data-theme` before first paint. The `<html>` element uses `suppressHydrationWarning` because the attribute differs from the server-rendered markup.
- The toggle is a small client component that updates the attribute and persists the choice, tolerating blocked storage.

## Consequences

- No flash of the wrong theme, and no dependency on a theming library.
- One source of truth for colour tokens; changing the palette is a CSS edit.
- The inline script prevents a strict `script-src` Content-Security-Policy without a nonce or hash. A hash-based CSP is possible later; the hash would have to be regenerated whenever the script changes.
- Contrast ratios were chosen by hand and have not been measured with an automated tool yet.
