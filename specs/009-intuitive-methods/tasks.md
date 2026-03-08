# Tasks: Intuitive Methods Learning Page

**Input**: Design documents from `/specs/009-intuitive-methods/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-contract.md

**Tests**: Automated tests are not explicitly required in the spec; this task list uses manual validation tasks aligned to each user story.

**Organization**: Tasks are grouped by user story for independent implementation and validation.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1, US2, US3
- Include exact file paths in every implementation task

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare feature files and baseline route scaffold.

- [x] T001 Create page module scaffold in `cfop-app/src/pages/IntuitivePage.tsx` with `CfopPageLayout` wrapper and placeholder sections.
- [x] T002 Register route skeleton in `cfop-app/src/App.tsx` for path `/intuitive` pointing to `IntuitivePage`.
- [x] T003 [P] Add/confirm base styling hooks for static instructional sections in `cfop-app/src/App.css` (section spacing, card labels, move-hint text class).

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared content/rendering primitives used by all stories.

**⚠️ CRITICAL**: No user story implementation until this phase is complete.

- [x] T004 Create static content structures (sections + cases) in `cfop-app/src/pages/IntuitivePage.tsx` using data from `specs/009-intuitive-methods/content-reference.md`.
- [x] T005 [P] Implement reusable case-card renderer in `cfop-app/src/pages/IntuitivePage.tsx` that supports label, optional move hint, and image state.
- [x] T006 [P] Implement image-fallback behavior in `cfop-app/src/pages/IntuitivePage.tsx`: on image error, keep card + label and render "Image unavailable" placeholder text (FR-009).
- [x] T007 Implement neutral-content guard in `cfop-app/src/pages/IntuitivePage.tsx` by removing creator-specific references from copied text (FR-011).
- [x] T008 Implement move-hint filter logic in `cfop-app/src/pages/IntuitivePage.tsx` to omit truncated/partial hints (FR-012).

**Checkpoint**: Foundation complete. User stories can proceed.

---

## Phase 3: User Story 1 - Learn Intuitive Cross Basics (Priority: P1) 🎯 MVP

**Goal**: Deliver a readable Intuitive Cross section with guidance and visual examples.

**Independent Test**: Open `#/intuitive`; verify Cross heading, guidance bullets, 3 case cards, and fallback placeholder behavior if an image is unavailable.

### Implementation for User Story 1

- [x] T009 [US1] Implement Cross section heading and intro copy in `cfop-app/src/pages/IntuitivePage.tsx`.
- [x] T010 [US1] Implement Cross guidance bullet list in `cfop-app/src/pages/IntuitivePage.tsx`.
- [x] T011 [P] [US1] Wire Cross case assets (`cross_case2/3/4.png`) in `cfop-app/src/pages/IntuitivePage.tsx` using `/cubing.spec/assets/cfop_bgr/...` paths.
- [x] T012 [US1] Apply responsive 3-case layout classes for Cross cards in `cfop-app/src/pages/IntuitivePage.tsx` and supporting rules in `cfop-app/src/App.css`.
- [x] T013 [US1] Manual validation for US1 on desktop + mobile baseline (393px): readability, no horizontal overflow, placeholder behavior.

**Checkpoint**: US1 complete and independently testable.

---

## Phase 4: User Story 2 - Learn Intuitive F2L Workflow (Priority: P2)

**Goal**: Deliver structured F2L learning flow with three step groupings and example visuals.

**Independent Test**: Open `#/intuitive`; verify F2L intro + Step 1/2/3 sections, labels, image groups, and complete-only move hints.

### Implementation for User Story 2

- [x] T014 [US2] Implement Intuitive F2L section intro copy in `cfop-app/src/pages/IntuitivePage.tsx`.
- [x] T015 [US2] Implement Step 1 (easy inserts) text, 4 case cards, and complete move hints only in `cfop-app/src/pages/IntuitivePage.tsx`.
- [x] T016 [US2] Implement Step 2 (setup pairs) text and 4 case cards in `cfop-app/src/pages/IntuitivePage.tsx` with truncated hints omitted.
- [x] T017 [US2] Implement Step 3 (insert pairs) text and 3 case cards in `cfop-app/src/pages/IntuitivePage.tsx`.
- [x] T018 [P] [US2] Apply responsive 4-case and 3-case card-grid classes in `cfop-app/src/pages/IntuitivePage.tsx` / `cfop-app/src/App.css`.
- [x] T019 [US2] Manual validation for US2: step ordering clarity, label readability, complete-only hint policy, and no horizontal scroll on 393px.

**Checkpoint**: US1 + US2 both independently functional.

---

## Phase 5: User Story 3 - Navigate Intuitive Content From Main App Menu (Priority: P3)

**Goal**: Make Intuitive Methods discoverable via main nav with correct active-state behavior.

**Independent Test**: From each existing page, navigate to Intuitive via navbar (desktop + mobile menu) and confirm active-state updates.

### Implementation for User Story 3

- [x] T020 [US3] Add Intuitive nav item in `cfop-app/src/components/CfopNavigation.tsx` using route `/intuitive` and expected ordering.
- [x] T021 [US3] Confirm route import + placement in `cfop-app/src/App.tsx` supports direct deep-link access (`#/intuitive`).
- [x] T022 [US3] Validate active-state styling compatibility for Intuitive tab in `cfop-app/src/components/CfopNavigation.tsx` and `cfop-app/src/App.css`.
- [x] T023 [US3] Manual validation for desktop and mobile hamburger nav: reachability, active-state correctness, and no overcrowding.

**Checkpoint**: All user stories functional and independently testable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality pass across all stories.

- [x] T024 [P] Accessibility pass in `cfop-app/src/pages/IntuitivePage.tsx`: heading hierarchy, alt text quality, placeholder semantics.
- [x] T025 [P] Content pass in `cfop-app/src/pages/IntuitivePage.tsx`: neutral wording check and consistency with `specs/009-intuitive-methods/spec.md` clarifications.
- [x] T026 Run production build validation in `cfop-app` (`npm run build`) and fix any regressions.
- [x] T027 Manual end-to-end feature pass at `http://127.0.0.1:5173/cubing.spec/#/intuitive` across US1-US3 acceptance checks.
- [x] T028 Update `specs/009-intuitive-methods/implementation-summary.md` after implementation is complete.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: start immediately.
- **Phase 2 (Foundational)**: depends on Phase 1; blocks all story work.
- **Phase 3 (US1)**: depends on Phase 2.
- **Phase 4 (US2)**: depends on Phase 2 (can proceed after US1 or in parallel once foundational work is done).
- **Phase 5 (US3)**: depends on Phase 2; should be validated after page content is present.
- **Phase 6 (Polish)**: depends on completed stories.

### Story Dependencies

- **US1 (P1)**: independent after foundational completion.
- **US2 (P2)**: independent after foundational completion; does not require US3.
- **US3 (P3)**: depends on route/page existence from setup/foundational tasks.

### Parallel Opportunities

- T003 can run in parallel with T001/T002.
- T005 and T006 can run in parallel after T004.
- T011 can run in parallel with T009/T010.
- T018 can run in parallel with T015-T017.
- T024 and T025 can run in parallel during polish.

---

## Implementation Strategy

### MVP First (US1)

1. Complete Phase 1 + Phase 2.
2. Complete US1 tasks (T009-T013).
3. Validate US1 independently before expanding to F2L.

### Incremental Delivery

1. Deliver US1 (Cross).
2. Add US2 (F2L progression).
3. Add US3 (navigation discoverability).
4. Execute polish and validation.

### Scope Guardrails

- Keep feature static-only (no toggles/expanders/reveal controls).
- Keep creator-neutral wording.
- Keep only complete move hints.
- Keep missing-image cards visible with placeholder text.
