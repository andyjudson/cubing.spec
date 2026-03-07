# Data Model — Random Scramble and Solve Timer

## Entity: `ScrambleState`

Represents the currently displayed scramble for the next/current attempt.

### Fields
- `value: string` — scramble notation displayed to user.
- `generatedAtMs: number` — timestamp when scramble was generated.
- `source: "initial" | "manual"` — generation trigger.

### Validation Rules
- `value` must be non-empty.
- `value` must parse as valid cube move notation (library-generated path is expected to satisfy this).
- New manual generation replaces prior `value` atomically.

## Entity: `TimerSession`

Represents one solve timing lifecycle.

### Fields
- `state: "idle" | "running" | "stopped"`
- `startAtMs: number | null` — set only while running.
- `elapsedMs: number` — current/final elapsed duration.
- `stoppedAtMs: number | null` — set when stopped.

### Validation Rules
- `elapsedMs >= 0`
- `startAtMs` must be non-null only when `state === "running"`.
- Only one active running session is allowed.

### State Transitions
- `idle -> running` on Start.
- `running -> stopped` on Stop.
- `stopped -> running` on Start New Attempt (elapsed resets to 0 at transition start).
- `running` remains `running` on disallowed actions (e.g., New Scramble request during active solve).

## Entity: `PracticeAttemptView`

Logical association used by UI flow (not persisted).

### Fields
- `scramble: ScrambleState`
- `timer: TimerSession`
- `finalTimeText: string | null` — formatted result when stopped.

### Relationships
- One `PracticeAttemptView` contains exactly one current `ScrambleState` and one `TimerSession`.
- A new scramble outside active timing starts the next attempt context.

## Derived/Presentation Values

- `elapsedDisplay`: formatted from `elapsedMs` (e.g., seconds with centiseconds).
- `canGenerateScramble`: true when timer is not running.
- `canStart`: true when timer is `idle` or `stopped`.
- `canStop`: true when timer is `running`.
