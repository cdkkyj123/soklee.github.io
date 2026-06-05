# ADR-003: Security Posture — Static Site

**Date**: 2026-06-05
**Status**: Accepted

## Context
Static HTML portfolio on GitHub Pages. No backend, no user input, no authentication.

## Security Decisions
- All external links: `target="_blank" rel="noopener"` (tab-napping prevention)
- No inline event handlers (`onclick=""` etc.) — all JS in external file
- No external CDN dependencies beyond Google Fonts (minimal attack surface)
- No `localStorage`/`sessionStorage` usage
- Email in plaintext — intentional (contact info)

## Limitations (GitHub Pages)
- Cannot set HTTP security headers (CSP, X-Frame-Options) via static files
- Noted but not actionable without proxy layer

## Audit Result: APPROVED (Phase 4 SECURITY agent)
