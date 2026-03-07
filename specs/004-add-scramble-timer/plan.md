# Implementation Plan: Random Scramble and Solve Timer

**Branch**: `[004-add-scramble-timer]` | **Date**: 2026-03-07 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-add-scramble-timer/spec.md`

## Summary

Add a scramble generation control and a simple solve timer to the existing React-based CFOP learning page. The approach uses the existing `cubing` dependency for valid 3x3 scramble generation and a lightweight timer state machine (`idle`/`running`/`stopped`) with robust timestamp-based elapsed time calculations to avoid drift and state conflicts.

## Technical Context

**Language/Version**: TypeScript 5.9 (React 19)  
**Primary Dependencies**: React, Vite, `cubing`, Bulma, `react-icons`  
**Storage**: N/A (in-memory session state only)  
**Testing**: Build/type-check (`tsc -b`, `vite build`) + manual browser verification checklist  
**Target Platform**: Modern desktop/mobile browsers via Vite web app  
**Project Type**: Frontend single-page web application  
**Performance Goals**: Scramble action responds quickly for interactive practice (target perceived response < 1s); timer display remains smooth and legible during running state  
**Constraints**: Keep UI simple; prevent conflicting timer actions; preserve existing feature behavior; use shared resources via existing symlinks  
**Scale/Scope**: Single page feature addition for individual practice flow (one active scramble, one active timer)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Constitution source reviewed: [`.specify/memory/constitution.md`](../../.specify/memory/constitution.md)
- Result: No enforceable project principles are currently defined (template placeholders only), so no blocking gates can be evaluated.
- Gate status (pre-research): **PASS (No active constitutional constraints to violate)**

## Project Structure

### Documentation (this feature)

```text
specs/004-add-scramble-timer/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-interactions.md
└── tasks.md
```

### Source Code (repository root)

```text
cfop-app/
├── src/
│   ├── App.tsx
│   ├── App.css
│   └── components/
│       ├── DemoModal.tsx
│       └── DemoModal.css
├── public/
│   ├── assets -> ../shared-assets (symlink)
│   └── data -> ../shared-data (symlink)
└── package.json
```

**Structure Decision**: Use the existing single frontend app under `cfop-app`, implementing feature behavior in `src/App.tsx` with scoped style updates in `src/App.css`. No backend or new package/module split is required.

## Phase Plan

### Phase 0 — Research

1. Confirm best practice for valid random 3x3 scramble generation with existing `cubing` dependency.
2. Confirm best practice for simple, accurate React timer state management.
3. Resolve interaction rule for requesting a new scramble during an active solve.

Output: [research.md](./research.md)

### Phase 1 — Design & Contracts

1. Define feature data model for scramble state, timer session, and attempt flow.
2. Define UI interaction contract for controls, state transitions, and conflict handling.
3. Write quickstart validation flow for local verification.
4. Update AI agent context for newly captured planning decisions.

Outputs:
- [data-model.md](./data-model.md)
- [contracts/ui-interactions.md](./contracts/ui-interactions.md)
- [quickstart.md](./quickstart.md)

## Post-Design Constitution Check

- Re-evaluated after Phase 1 outputs.
- Result: **PASS** (still no active constitutional rules defined; design introduces no policy conflict indicators).

## Complexity Tracking

No constitutional violations or complexity exceptions identified.
