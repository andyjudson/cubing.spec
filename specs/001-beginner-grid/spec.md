# Feature Specification: Beginner 2-Look Algorithm Grid (Retrospective)

**Feature Branch**: `001-beginner-grid`  
**Created**: 2026-03-08  
**Status**: Retrospective Backfill  
**Input**: Reconstructed from historical master spec in [spec.md](../../spec.md)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse Beginner 2-Look Cases (Priority: P1)

As a beginner cuber, I can view the full 2-look OLL/PLL set in one place so I can practice recognition and recall.

**Why this priority**: This is the foundation feature for all later learning enhancements.

**Independent Test**: Open the app and verify all beginner 2-look cases are visible in grouped sections with readable cards.

**Acceptance Scenarios**:

1. **Given** a user opens the app, **When** the beginner grid loads, **Then** they see grouped OLL and PLL sections.
2. **Given** a user scans cards, **When** they view case details, **Then** each card shows case name, notation, and image.

---

### User Story 2 - Prioritize Essential Cases (Priority: P2)

As a learner, I can identify essential starter algorithms so I know what to focus on first.

**Why this priority**: Starter guidance improves progression for new users.

**Independent Test**: Verify essential cases are clearly marked and discoverable from the page.

**Acceptance Scenarios**:

1. **Given** a user reviews the grid, **When** they look for core cases, **Then** essential cases are visibly marked.

---

### User Story 3 - Use on Mobile and Desktop (Priority: P3)

As a user on different devices, I can read and navigate the algorithm cards without layout issues.

**Why this priority**: Cross-device usability supports real practice sessions.

**Independent Test**: Validate layout and readability on small and large viewports.

**Acceptance Scenarios**:

1. **Given** a mobile viewport, **When** the grid renders, **Then** cards reflow without horizontal scrolling in core content.

### Edge Cases

- If an image fails to load, the card content remains readable.
- If algorithm notes are empty, the card still renders required fields.
- If users return later, content structure remains stable and predictable.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST present beginner 2-look OLL and PLL cases in a single learning page.
- **FR-002**: The system MUST group cases by case type for readability.
- **FR-003**: Each case card MUST display a name, notation, and image reference.
- **FR-004**: The page MUST visibly identify essential starter algorithms.
- **FR-005**: The layout MUST support mobile and desktop readability.

### Key Entities *(include if feature involves data)*

- **Beginner Algorithm Case**: Case id, name, notation, method, group, image, notes.
- **Case Group**: A labeled collection of beginner cases (e.g., OLL/PLL subgroupings).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of beginner cases load in grouped sections on initial page view.
- **SC-002**: At least 90% of test users can locate all essential starter cases in under 30 seconds.
- **SC-003**: At least 90% of users can read notation and case names on mobile baseline without horizontal scrolling.
