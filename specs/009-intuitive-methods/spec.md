# Feature Specification: Intuitive Methods Learning Page

**Feature Branch**: `009-intuitive-methods`  
**Created**: 2026-03-08  
**Status**: Draft  
**Input**: User description: "Add intuitive methods learning content to cfop-app by reusing notes and images from legacy IntuitivePage, including intuitive Cross and intuitive F2L guidance, with a layout aligned to the existing app patterns and mobile-friendly navigation."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Learn Intuitive Cross Basics (Priority: P1)

As a beginner, I can open an Intuitive Methods page and learn the intuitive Cross approach with visual examples so I can complete the first stage of CFOP without memorizing algorithms.

**Why this priority**: Cross is the first required stage of every solve and gives immediate value to new learners.

**Independent Test**: Open the Intuitive Methods page, verify Cross guidance text and supporting images are visible, readable, and understandable on mobile and desktop.

**Acceptance Scenarios**:

1. **Given** a user opens the Intuitive Methods page, **When** they view the Cross section, **Then** they see concise guidance for common Cross piece states and corrective actions.
2. **Given** a user is on a small-screen device, **When** they view the Cross examples, **Then** the text and image layout remain readable without horizontal overflow.

---

### User Story 2 - Learn Intuitive F2L Workflow (Priority: P2)

As a learner progressing past Cross, I can read intuitive F2L guidance organized by practical steps and example patterns so I can practice pair setup and insertion logic.

**Why this priority**: F2L is the largest skill gap for beginners and benefits from structured, non-algorithmic explanations.

**Independent Test**: Open the Intuitive Methods page, verify the F2L content includes step-based guidance and example visuals that can be followed in sequence.

**Acceptance Scenarios**:

1. **Given** a user opens the F2L portion of the Intuitive Methods page, **When** they read the content, **Then** they can see distinct step groupings (easy inserts, setup, and insertion logic).
2. **Given** a user scrolls the F2L sections, **When** they inspect example cards, **Then** each example presents a clear label and accompanying visual reference.

---

### User Story 3 - Navigate Intuitive Content From Main App Menu (Priority: P3)

As a mobile user, I can reach the Intuitive Methods page from the main navigation without the menu becoming overcrowded, so the app remains easy to use as more pages are added.

**Why this priority**: Navigation scalability is important but depends on primary content availability.

**Independent Test**: From any existing page, open navigation on mobile and desktop, navigate to Intuitive Methods, and verify active-state behavior and menu usability.

**Acceptance Scenarios**:

1. **Given** a user opens the app navigation, **When** they select Intuitive Methods, **Then** the Intuitive page loads and the current navigation state updates correctly.
2. **Given** a user uses a mobile viewport, **When** they open the navigation, **Then** they can access Intuitive Methods without requiring excessive vertical scrolling in the menu.

### Edge Cases

- If one or more legacy images are missing or unavailable, the page should still render all available content and clearly indicate unavailable visuals.
- If a learner opens Intuitive Methods directly from a shared/deep link, the page should render correctly with no dependency on prior navigation steps.
- If content includes longer guidance paragraphs, spacing and line length should remain readable on small screens.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide an Intuitive Methods page that covers both intuitive Cross and intuitive F2L learning guidance.
- **FR-002**: The system MUST reuse existing approved instructional copy and images from the current legacy intuitive materials as the initial content source.
- **FR-003**: The Intuitive Methods page MUST present Cross and F2L as clearly separated sections with descriptive headings.
- **FR-004**: The F2L section MUST include step-based guidance that distinguishes beginner-friendly progression stages.
- **FR-005**: The page MUST provide visual examples for key cases where corresponding images are available.
- **FR-006**: The system MUST make the Intuitive Methods page accessible from the main app navigation.
- **FR-007**: Navigation to and from Intuitive Methods MUST preserve expected page state indicators (current-page highlighting and route accuracy).
- **FR-008**: The Intuitive Methods page MUST remain usable on small-screen devices without horizontal scrolling in core content regions.
- **FR-009**: If legacy content cannot be loaded fully, the system MUST fail gracefully and continue to show available sections.
- **FR-010**: The feature MUST not remove or degrade existing algorithm reference pages (2LK, F2L, OLL, PLL).

### Key Entities *(include if feature involves data)*

- **Intuitive Topic Section**: A learner-facing content block (e.g., Cross, F2L) containing title, explanatory text, and ordered guidance.
- **Example Case Visual**: A reusable visual reference item containing label, optional short move hint, and image asset link.
- **Navigation Destination**: A top-level app page entry containing display label, route target, and active-state semantics.

### Assumptions & Dependencies

- Legacy intuitive notes and image assets are available for reuse and are considered approved baseline content.
- Existing app navigation patterns remain the primary entry model for all top-level learning pages.
- This feature introduces instructional content only; it does not require solve timers, demos, or new algorithm datasets.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of users can open the Intuitive Methods page from the app navigation in one navigation action.
- **SC-002**: At least 90% of first-time test users can identify both the Cross and F2L sections within 10 seconds of page load.
- **SC-003**: At least 90% of test users can complete a basic “find the next F2L step” comprehension task using only the page guidance.
- **SC-004**: On small-screen baseline testing, all primary text and example content is readable without horizontal scrolling.
- **SC-005**: If any single visual asset is unavailable, the page still renders remaining sections without blocking navigation.
