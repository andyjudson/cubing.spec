# Feature Specification: Algorithm Notes Tooltips (Retrospective)

**Feature Branch**: `002-tooltips`  
**Created**: 2026-03-08  
**Status**: Retrospective Backfill  
**Input**: Reconstructed from historical master spec in [spec.md](../../spec.md)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Reveal Notes on Hover/Tap (Priority: P1)

As a learner, I can reveal algorithm notes directly from a case image so I can understand orientation and execution hints while practicing.

**Why this priority**: Adds critical instructional context to the core grid experience.

**Independent Test**: Hover or tap algorithm images and verify notes appear and dismiss as expected.

**Acceptance Scenarios**:

1. **Given** a user hovers a case image, **When** notes exist, **Then** a tooltip appears with note content.
2. **Given** a touch user taps a case image, **When** the tooltip opens, **Then** they can dismiss it with a tap-away interaction.

---

### User Story 2 - Read Rich Note Content (Priority: P2)

As a learner, I can read structured note formatting so guidance is easier to understand.

**Why this priority**: Better readability improves learning value.

**Independent Test**: Verify note formatting (headings/list emphasis) renders clearly in tooltips.

**Acceptance Scenarios**:

1. **Given** a note includes structured formatting, **When** it is displayed, **Then** the tooltip preserves readable formatting.

---

### User Story 3 - Avoid Visual Overlap Issues (Priority: P3)

As a user, I can read tooltips without nearby cards obscuring content.

**Why this priority**: Prevents frustration and accidental misses during study.

**Independent Test**: Trigger tooltips near adjacent cards and viewport edges to verify visibility and layering.

**Acceptance Scenarios**:

1. **Given** a user opens a tooltip near neighboring cards, **When** tooltip renders, **Then** content remains legible and unobstructed.

### Edge Cases

- Tooltip content remains usable on small screens.
- Missing note text does not break card rendering.
- Tooltip placement adjusts when little room exists on one side.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST show case notes when users interact with case images.
- **FR-002**: The system MUST support both pointer hover and touch-friendly interaction patterns.
- **FR-003**: Notes MUST render with structured formatting when provided.
- **FR-004**: Tooltips MUST be dismissible through expected user actions.
- **FR-005**: Tooltip presentation MUST avoid blocking readability of the note content.

### Key Entities *(include if feature involves data)*

- **Algorithm Note**: Contextual guidance content tied to an algorithm case.
- **Tooltip Interaction State**: Visibility and placement state for note presentation.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: At least 95% of tooltip interactions display note content within one user action.
- **SC-002**: At least 90% of test users can find and dismiss tooltips successfully on mobile and desktop.
- **SC-003**: At least 90% of users report tooltip text is readable without being obscured.
