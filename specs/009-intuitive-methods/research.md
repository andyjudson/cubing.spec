# Research: Intuitive Methods Learning Page

**Feature**: 009-intuitive-methods  
**Date**: 2026-03-08  
**Purpose**: Extract content from legacy page and establish content organization patterns

**Note**: See [content-reference.md](content-reference.md) for complete text and image extraction from legacy IntuitivePage

## Research Tasks

### 1. Content Organization Pattern

**Question**: How should the educational content be structured for optimal learning flow?

**Decision**: Two-section structure with Cross first, then F2L with three progressive subsections

**Rationale**:
- Cross is the foundational first step - must come before F2L
- F2L breaks naturally into three learning stages: easy inserts → setup strategies → insertion logic
- Progressive complexity: simple cases first, then setup techniques, then decision-making guidance
- Matches existing CFOP pedagogy: master basics before advanced strategies

**Content Flow**:
1. **Intuitive Cross**: Single section with 3 common case types
2. **Intuitive F2L**: Three progressive subsections
   - Step 1: 4 easy insert patterns (the goal cases)
   - Step 2: 4 setup scenarios (how to reach goal cases)
   - Step 3: 3 insertion decision rules (when to use which approach)

---

### 2. Text Content Refinement

**Question**: Should legacy text be used verbatim or refined for clarity?

**Decision**: Use legacy text with minor edits for conciseness and consistency

**Changes to Consider**:
- Shorten long sentences for mobile readability
- Remove external references (e.g., "CubeHead video") to keep focus internal
- Standardize terminology: "edge-corner pair" vs "pair", "slot" usage
- Ensure parallel structure in bullet lists

**Preserved Elements**:
- Core instructional guidance (solving approach, piece states)
- Step-by-step logic explanations
- Best practices and tips (opposite colors, avoid rotations)
- Practical problem-solving strategies

---

### 3. Image Grid Patterns

**Question**: What responsive layout patterns work best for instructional image grids?

**Decision**: Use 3-column and 4-column responsive grids based on content grouping

**Rationale**:
- Cross section has 3 distinct case types → 3-column grid
- F2L Step 1 and Step 2 have 4 paired cases (right/left variants) → 4-column grids
- F2L Step 3 has 3 decision scenarios → 3-column grid
- Existing algorithm pages use similar column patterns successfully

**Responsive Breakpoints**:
- **3-column grids**: 3 cols (desktop), 2 cols (tablet), 1 col (mobile)
- **4-column grids**: 4 cols (desktop), 2 cols (tablet), 1 col (mobile)

**Visual Hierarchy**:
- Each case gets: label (heading) + image + optional algorithm hint
- Labels use line breaks for readability (e.g., "connected<br/>right pair")
- Algorithm hints in monospace font to distinguish from labels

---

### 4. Algorithm Hint Treatment

**Question**: How should algorithm hints be displayed for each case?

**Decision**: Show complete algorithms where educational, omit where focus is intuitive reasoning

**Analysis from Legacy Content**:
- **F2L Step 1 (easy inserts)**: Has 4 complete algorithms → keep (shows exact moves for goal cases)
- **F2L Step 2 (setup pairs)**: Has partial algorithms with "..." → remove (focus is setup concept, not memorization)
- **F2L Step 3 (insert logic)**: No algorithms → keep as-is (teaches decision-making, not moves)
- **Cross**: No algorithms → keep as-is (purely intuitive)

**Rationale**: Feature teaches intuitive thinking, not algorithmic memorization. Show algorithms only where they're the learning outcome (Step 1 goal cases).

---

### 5. Section Heading Hierarchy

**Question**: What heading structure provides clearest content organization?

**Decision**: Three-level hierarchy with visual consistency

**Structure**:
- **H2**: Major sections (Intuitive Cross, Intuitive F2L)
- **H3**: Subsections (Step 1, Step 2, Step 3)
- **H4-H6**: Case labels within grids (small subtitle styling)

**Visual Treatment**:
- H2: Centered, larger title font
- H3: Left-aligned, medium subtitle font  
- Case labels: Small, tight line-height for compact grid cards

---

### 6. Page Introduction Strategy

**Question**: Should page have intro text, intro image, or both?

**Decision**: Intro text only (no intro image)

**Rationale**:
- Content sections already have 14 images → avoid visual overload
- Intro text should set context: "Learn intuitive methods before algorithms"
- Existing pages use intro text to explain page purpose → maintain consistency
- Intro image optional per CfopPageLayout API → omit for this feature

**Intro Text Focus**:
- Position intuitive methods in CFOP learning journey
- Explain difference from algorithmic approach
- Set expectations: pattern recognition over memorization

---

### 7. Clarification Decisions Applied

**Decision**: Apply all clarification outcomes directly to content planning.

**Rationale**:
- Missing images must not remove instructional context, so case cards remain visible with explicit placeholder text.
- Neutral wording avoids creator-specific attributions and keeps instructional voice consistent.
- Truncated move hints can mislead learners, so only complete hints are displayed.
- Static-only scope prevents feature creep and keeps this release focused on instructional clarity.

**Applied Rules**:
- Keep card + label + "Image unavailable" placeholder if a case image is missing.
- Remove creator-specific mentions from copied legacy text.
- Display move hints only when complete; omit partial/truncated hints.
- No interactive controls (no toggles, expanders, per-card reveal controls).

---

## Summary

All research resolved with focus on content organization over implementation details:

1. **Content Structure**: Two sections (Cross, F2L) with F2L split into 3 progressive subsections
2. **Text Approach**: Use legacy text with minor edits for clarity and mobile readability
3. **Image Layout**: 3-column and 4-column responsive grids based on case groupings
4. **Algorithm Display**: Show complete algorithms only for F2L Step 1 (goal cases), omit elsewhere
5. **Heading Hierarchy**: Three levels (H2/H3/H4-H6) with visual distinction
6. **Page Intro**: Text only, no image needed
7. **Clarification Rules**: Placeholder handling, neutral wording, complete-only move hints, static-only scope

**Content Extraction**: See [content-reference.md](content-reference.md) for complete text, labels, and image references from legacy page.

Ready to proceed to Phase 1 (data model and contracts).

