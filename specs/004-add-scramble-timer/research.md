# Phase 0 Research — Random Scramble and Solve Timer

## Decision 1: Use `randomScrambleForEvent("333")` from `cubing/scramble`

- **Decision**: Generate scrambles with the existing `cubing` library API (`randomScrambleForEvent("333")`), store the generated result as an algorithm object/string pair for UI rendering.
- **Rationale**: This produces valid 3x3 notation without implementing custom randomization logic, reduces correctness risk, and aligns with already-installed project dependencies.
- **Alternatives considered**:
  - Custom move-string randomizer
    - Rejected: higher risk of biased or invalid scrambles.
  - Server-side scramble endpoint
    - Rejected: adds backend/network dependency and latency for a currently client-only app.
  - Static precomputed list
    - Rejected: repetition risk and reduced randomness over repeated practice.

## Decision 2: Implement timer via state machine + monotonic clock

- **Decision**: Use a timer model with explicit states (`idle`, `running`, `stopped`) and elapsed time computed from `performance.now()`; render updates while running using a single animation loop.
- **Rationale**: Timestamp-based calculation avoids drift, explicit transitions prevent invalid state changes, and one active loop simplifies cleanup and race prevention.
- **Alternatives considered**:
  - `setInterval` incremental timing
    - Rejected: susceptible to drift/throttling and duplicate interval bugs under rapid interactions.
  - Worker-based timer
    - Rejected: unnecessary complexity for this simple single-page timer.

## Decision 3: Lock scramble changes while timer is active

- **Decision**: When timer is `running`, prevent scramble replacement and provide clear non-blocking feedback. Allow new scramble only when solve is not active.
- **Rationale**: Preserves one-to-one mapping between scramble and solve attempt, avoids accidental invalid attempts, and keeps behavior predictable.
- **Alternatives considered**:
  - Auto-replace scramble during running timer
    - Rejected: breaks attempt integrity.
  - Auto-stop and mark DNF on scramble request
    - Rejected: too destructive for accidental taps.
  - Force confirmation dialog on every request
    - Rejected: interrupts fast practice flow.

## Decision 4: Keep scope to current-attempt UX only

- **Decision**: Do not add persistence/history in this feature; show current scramble and current/last solve time only.
- **Rationale**: Matches feature scope and keeps implementation small for Feature 004.
- **Alternatives considered**:
  - Add solve history now
    - Rejected: extends beyond requested feature and introduces additional UI/state complexity.

## Resolved Clarifications

All technical context questions for this feature are resolved in this document. No `NEEDS CLARIFICATION` items remain.
