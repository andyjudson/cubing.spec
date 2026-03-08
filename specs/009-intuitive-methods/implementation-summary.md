# Implementation Summary: Intuitive Methods Learning Page

**Feature**: 009-intuitive-methods  
**Date**: 2026-03-08  
**Branch**: `009-intuitive-methods`

## Scope Delivered

Implemented a new static **Intuitive Methods** page in `cfop-app` with:

- Intuitive Cross section (guidance + 3 case cards)
- Intuitive F2L section with three steps (easy inserts, setup pairs, insert pairs)
- Case-card renderer reused across sections
- Missing-image fallback behavior per clarified requirement
- Neutral instructional wording (creator-specific references removed)
- Complete-only move hints (truncated hints omitted)
- Navigation entry and route for `/intuitive`

## Files Changed

### App Routing
- `cfop-app/src/App.tsx`
  - Added `IntuitivePage` import
  - Added route: `/intuitive`

### Navigation
- `cfop-app/src/components/CfopNavigation.tsx`
  - Added nav link: `Intuitive`

### New Page
- `cfop-app/src/pages/IntuitivePage.tsx`
  - Added static content structures for all sections/cases
  - Added `CaseCards` renderer
  - Added `sanitizeMoveHint()` policy for complete-only hints
  - Added image `onError` handling to preserve cards with `Image unavailable`
  - Added semantic headings for accessibility

### Styling
- `cfop-app/src/App.css`
  - Added `intuitive-*` classes for section spacing, list readability, card styles, fallback styles, and move-hint styling

### Feature Tracking
- `specs/009-intuitive-methods/tasks.md`
  - Updated progress checkboxes through implementation and validation steps

## Clarifications Applied

Implemented all spec clarifications:

1. Missing images: keep card + label + placeholder text
2. Neutral wording: remove creator-specific references
3. Move hints: only complete hints displayed
4. Static scope: no toggles/expanders/reveal interactions

## Validation Performed

- Production build passes:
  - `npm run build` in `cfop-app`
- Local dev preview started and reachable:
  - `http://127.0.0.1:5173/cubing.spec/#/intuitive`

## Notes

- This feature is intentionally static and content-first.
- Any future interactivity (progress tracking, collapsible sections, reveal controls) should be treated as a separate feature.
