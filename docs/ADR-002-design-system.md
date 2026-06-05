# ADR-002: Dark Minimal Design System

**Date**: 2026-06-05
**Status**: Accepted

## Decision
- Background: Deep navy #1a1a2e (not pure black — avoids harshness)
- Single accent: Warm gold #f0a500 (not cyan/blue — warm tone for credibility)
- Fonts: Inter (body) + JetBrains Mono (metrics/code)
- Quantitative metrics displayed in mono+accent — reinforces "증명" positioning

## Rationale
- Dark navy reduces eye strain vs pure black
- Single accent prevents visual noise — every gold element demands attention
- Mono font for numbers signals precision/engineering mindset
- WCAG AA compliant: #f0f0f0 on #1a1a2e ≈14:1, gold on navy ≈8:1

## Phase 4 UIUX Fixes Applied
- `--text-muted` / `--status-private`: #6c6c7a → #9090a0 (WCAG AA compliance, 5.65:1 contrast ratio)
- Hamburger button: min-width/height 44px (WCAG touch target minimum)
- `.btn` mobile: min-height 44px added
- Missing `aria-labelledby` gaps filled (differentiation section, readys7 detail header)
