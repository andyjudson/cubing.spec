# UI Interaction Contract — Random Scramble and Solve Timer

## Scope

Contract for user-visible controls and state behavior on the Feature 004 practice page.

## Controls

1. **New Scramble Button**
   - Purpose: Generate and display a random 3x3 scramble.
2. **Timer Start/Stop Control**
   - Purpose: Start and stop solve timing.
3. **Timer Readout**
   - Purpose: Show live elapsed time while running and final time when stopped.

## Contract Rules

### Rule C-001: Scramble generation
- On `New Scramble` press while timer is not running:
  - System must replace current scramble with a newly generated scramble.
  - New scramble must be visible immediately after generation completes.

### Rule C-002: Start timing
- On `Start` from `idle` or `stopped`:
  - Timer state becomes `running`.
  - Elapsed time starts from `0` for that attempt.
  - Timer readout updates continuously while running.

### Rule C-003: Stop timing
- On `Stop` from `running`:
  - Timer state becomes `stopped`.
  - Final elapsed time remains visible until next attempt starts.

### Rule C-004: Running-state scramble protection
- On `New Scramble` press while timer is `running`:
  - Current scramble must remain unchanged.
  - Timer state must remain `running`.
  - System should provide clear non-blocking feedback explaining why action is unavailable.

### Rule C-005: Conflict prevention
- System must prevent duplicate active timers caused by rapid repeated interactions.
- Repeated `Start` while already `running` must not create additional timing loops.

## Accessibility & Usability Expectations

- Controls must have clear text labels and visible enabled/disabled state.
- Timer readout must remain legible on desktop and mobile widths.
- Status changes (e.g., blocked scramble action during running timer) must be understandable without documentation.

## Acceptance Mapping

- Covers FR-001 to FR-010 in [spec.md](../spec.md).
