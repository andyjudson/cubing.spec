# Phase 0 Research — Feature 006 Fallback Scramble Generator

## Decision 1: Use deterministic-rule random move generator (not random-state solver)

- **Decision**: Implement a local 3x3 move-sequence generator that randomly selects faces/modifiers while enforcing quality constraints:
  - 20 fixed moves
  - no same-face consecutive moves
  - no opposite-face A-B-A patterns (U/D, L/R, F/B)
- **Rationale**: Meets practice reliability and parseability goals without worker/runtime complexity. Fully removes dependency on `cubing/scramble` workers that fail in production.
- **Alternatives considered**:
  - Continue using `cubing/scramble` + Vite workaround: rejected (known unresolved production hang)
  - Integrate TNoodle/official random-state tooling: rejected (too heavy, out of scope)
  - Use another scramble library (`mark2`/`mark3`): rejected (integration and ecosystem risk, no clear low-risk browser drop-in)

## Decision 2: Validate output with `Alg.fromString` before returning

- **Decision**: Parse every generated scramble string with `Alg.fromString`; only resolve successful parse results.
- **Rationale**: Guarantees compatibility with existing cubing.js notation paths and prevents malformed strings reaching UI state.
- **Alternatives considered**:
  - Regex-only validation: rejected (cannot guarantee parser-level compatibility)
  - No validation: rejected (violates FR-002 and increases runtime risk)

## Decision 3: Enforce last-click-wins request semantics in UI integration

- **Decision**: Track request token/version for `New Scramble`; only latest pending request may update modal state.
- **Rationale**: Directly addresses rapid-click edge case and prevents stale out-of-order state updates.
- **Alternatives considered**:
  - Disable button while loading: rejected (worse UX, conflicts with user preference for rapid requests)
  - Queue all requests: rejected (unnecessary complexity, stale intermediate states)

## Decision 4: Treat >1000ms generation as failure and preserve last valid scramble

- **Decision**: Apply a 1000ms timeout wrapper; on timeout/failure keep previous scramble visible and show inline error.
- **Rationale**: Prevents indefinite “Generating...” hangs while preserving usability and timer flow.
- **Alternatives considered**:
  - No timeout: rejected (does not solve observed hang failure mode)
  - Longer timeout (2s+): rejected (slower failure feedback, weaker UX)

## Decision 5: Remove scramble-worker-specific Vite config only after runtime imports are removed

- **Decision**: Sequence migration as:
  1. switch runtime generator usage,
  2. remove `cubing/scramble` and `cubing/search` imports from app runtime code,
  3. simplify/remove worker workaround in `vite.config.ts`.
- **Rationale**: Minimizes regression risk and ensures build remains green during transition.
- **Alternatives considered**:
  - Remove Vite workaround first: rejected (could break current branch behavior before migration complete)

## Decision 6: Use existing build + manual smoke checks for acceptance

- **Decision**: Validate with `npm run build` and targeted manual checks in practice modal (50+ requests, failure-path simulation, rapid clicks).
- **Rationale**: Matches current project tooling (no dedicated automated test framework configured in this app branch).
- **Alternatives considered**:
  - Introduce new test framework in this feature: rejected (scope creep; can be separate backlog item)

## Resolved Clarifications and Unknowns

All previously open planning unknowns are now resolved by spec clarifications:
- failure behavior: preserve last valid scramble + inline error
- length policy: fixed 20 moves for v1
- concurrency policy: last-click-wins
- communication policy: practice-grade note in docs/spec (no additional UI text)
- timeout policy: 1000ms
