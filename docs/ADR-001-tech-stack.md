# ADR-001: Pure HTML/CSS/JS (No Build Tools)

**Date**: 2026-06-05
**Status**: Accepted

## Context
Portfolio site for GitHub Pages. Evaluating static site options:
- Option A: React/Next.js (requires build step)
- Option B: Pure HTML/CSS/JS (no build)

## Decision
Pure HTML + CSS + JS. No frameworks, no build tools, no npm.

## Rationale
- GitHub Pages serves static files directly — no build pipeline needed
- Zero dependency surface — no package.json, no CVEs, no outdated deps
- Instant deploy: push HTML files → live in minutes
- Simpler maintenance: edit any file, commit, deploy

## Consequences
- No component reuse via frameworks (mitigated by simple copy-paste, small site)
- No CSS preprocessing (mitigated by CSS custom properties / variables)
- Manual HTML duplication for nav/footer across detail pages (accepted tradeoff)
