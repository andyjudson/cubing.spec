# Data Model: Intuitive Methods Learning Page

**Feature**: 009-intuitive-methods  
**Date**: 2026-03-08  
**Purpose**: Define data structures and state management for the Intuitive Methods page

## Overview

This feature introduces **static instructional content only** - no dynamic data loading, no user state, no algorithms to track. The data model is minimal because content is hardcoded JSX markup.

## Entities

### InstructionalSection

**Purpose**: Logical grouping of educational content within the Intuitive page

**Structure**:
```typescript
interface InstructionalSection {
  id: string;              // e.g., "cross", "f2l-easy-inserts", "f2l-setup"
  title: string;           // e.g., "Intuitive Cross", "Step 1: easy inserts"
  description: string;     // Paragraph text explaining the concept
  steps: string[];         // Bullet points (rendered as <li> items)
  examples: ExampleCase[]; // Visual reference cases
}
```

**Validation Rules**:
- `id`: Unique within page, kebab-case
- `title`: Non-empty, user-facing display text
- `description`: Plain text, may contain inline formatting
- `steps`: Array of plain text strings
- `examples`: Optional (may be empty for sections without visuals)

**State Lifecycle**: Static - defined at component render time, no mutations

---

### ExampleCase

**Purpose**: Visual reference for a specific case or step with image and caption

**Structure**:
```typescript
interface ExampleCase {
  id: string;           // e.g., "cross-positioned", "f2l-insert-1"
  label: string;        // Caption text (e.g., "positioned not oriented")
  imagePath: string;    // Absolute path to PNG asset
  altText: string;      // Accessibility description
  moveHint?: string;    // Optional algorithm notation (e.g., "U R U' R'")
}
```

**Validation Rules**:
- `id`: Unique within section, kebab-case
- `label`: Non-empty, concise (max 50 chars for layout)
- `imagePath`: Must start with `/cubing.spec/assets/`
- `altText`: Non-empty, descriptive for screen readers
- `moveHint`: Optional, Cubing.js-compatible notation if present

**State Lifecycle**: Static - defined at component render time, no mutations

---

## Data Flow

```text
[IntuitivePage Component]
        ↓
[Hardcoded JSX Structure]
        ↓
[Section Headings + Text Content]
        ↓
[Bulma Columns Grid]
        ↓
[Example Case Cards with Images]
```

**No external data sources** - all content is inline JSX

**No state management** - component is purely presentational

**No side effects** - no data fetching, no localStorage, no timers

---

## Comparison with Existing Pages

| Feature | BGRPage | F2LPage | IntuitivePage |
|---------|---------|---------|---------------|
| Data Source | JSON file (`algs-cfop-bgr.json`) | JSON file | **Hardcoded JSX** |
| State Hook | `useState<CfopAlgorithm[]>` | `useState<CfopAlgorithm[]>` | **None** |
| Loading State | Yes (`loading` boolean) | Yes | **No** |
| Error Handling | Try/catch fetch | Try/catch fetch | **N/A** |
| User Interaction | Hover tooltips, demo modal, practice modal | Hover tooltips, section toggle | **None** |
| Dynamic Content | Algorithm cards rendered from array | Algorithm cards + grouped sections | **Static text + images** |

**Rationale for Simplification**:
- Instructional content is fixed, not data-driven
- No user customization needed (unlike starred algorithms)
- No interactive features required per spec (FR-010 explicitly excludes demos/timers)
- Simpler maintenance - content changes are code changes, not data migrations

---

## Asset Manifest

All image assets already exist in `/cubing.spec/cfop-app/public/assets/cfop_bgr/`:

### Cross Section (3 images)
- `cross_case2.png` - positioned not oriented
- `cross_case3.png` - oriented not positioned  
- `cross_case4.png` - flipped

### F2L Easy Inserts (4 images)
- `f2l_case1_insert1.png` - connected right pair
- `f2l_case1_insert2.png` - connected left pair
- `f2l_case1_insert3.png` - disconnected right pair
- `f2l_case1_insert4.png` - disconnected left pair

### F2L Setup Pairs (4 images)
- `f2l_case2_stuck1.png` - edge in slot + corner in layer
- `f2l_case2_stuck2.png` - corner in slot + edge in layer
- `f2l_case2_stuck3.png` - pair misaligned in slot
- `f2l_case2_stuck4.png` - pair misaligned in layer

### F2L Insert Logic (3 images)
- `f2l_case3_setup1.png` - white to side + colours match
- `f2l_case3_setup2.png` - white to side + colours not match
- `f2l_case3_setup3.png` - white is up

**Total**: 14 images (all present, no missing assets)

---

## Interface Boundaries

### Props Interface

```typescript
// IntuitivePage is a route component, receives no props from parent
// Uses CfopPageLayout wrapper which accepts:
interface CfopPageLayoutProps {
  pageTitle: string;              // "Intuitive Methods"
  introText: string;              // Brief overview paragraph
  introImageSrc?: string;         // Optional intro image (not required for this feature)
  introImageAlt?: string;         // Alt text if intro image provided
  actionButtons?: React.ReactNode; // Not needed for this page
  children: React.ReactNode;      // Main content sections
}
```

### Component Exports

```typescript
// IntuitivePage.tsx
export default function IntuitivePage(): JSX.Element;
```

### Route Configuration

```typescript
// App.tsx
<Route path="/intuitive" element={<IntuitivePage />} />
```

### Navigation Integration

```typescript
// CfopNavigation.tsx
const navItems = [
  { path: '/2lk', label: '2LK' },
  { path: '/intuitive', label: 'Intuitive' }, // NEW
  { path: '/f2l', label: 'F2L' },
  { path: '/oll', label: 'OLL' },
  { path: '/pll', label: 'PLL' },
];
```

---

## State Management Analysis

**No state management required** for this feature because:

1. **No Dynamic Data**: Content is static JSX, not loaded from JSON
2. **No User Preferences**: No starred cases, no toggled sections, no customization
3. **No Interactive Features**: No hover tooltips, no modals, no timers per spec exclusions
4. **No Network Requests**: All assets are static files bundled with app

**If future features add interactivity** (e.g., "mark case as learned"), state management would need:
- localStorage persistence pattern (similar to starred algorithms in BGRPage)
- useState hook for tracking learned cases
- useEffect for loading/saving state

**Current implementation**: Pure presentational component with zero state.

---

## Validation Strategy

### Content Validation (Build Time)
- TypeScript compilation ensures JSX structure is valid
- Vite build process validates asset paths (broken links cause build warnings)
- Manual visual inspection via dev server

### Asset Validation (Runtime)
- Browser handles broken image links (shows placeholder per spec FR-009)
- No custom error boundaries needed for this feature
- Alt text provides accessible fallback

### Responsive Validation (Manual Testing)
- Test on iPhone 16 simulator (393px CSS width baseline)
- Verify Bulma column wrapping at mobile/tablet/desktop breakpoints
- Ensure text remains readable without horizontal scroll

---

## Future Extensibility

### Potential Enhancements (Not in Current Scope)

1. **Interactive Demos**: Add TwistyPlayer visualizations for example cases
   - Would require: useState for current case, DemoModal integration
   - Data model: Add `setup` and `moves` fields to ExampleCase

2. **Progress Tracking**: Mark sections as "learned" or "mastered"
   - Would require: localStorage persistence, useState for completed sections
   - Data model: Add `completedSections: string[]` to app state

3. **Content Localization**: Support multiple languages
   - Would require: JSON content files per language, useContext for locale
   - Data model: Migrate from JSX to i18n JSON structure

4. **Video Embeds**: Inline YouTube tutorial links
   - Would require: Iframe components, lazy loading
   - Data model: Add `videoUrl?: string` to InstructionalSection

**Current design does not preclude these extensions** - component structure allows iterative enhancement.

---

## Summary

- **Entity Count**: 2 (InstructionalSection, ExampleCase) - both conceptual, not implemented as TypeScript interfaces in this feature
- **Data Sources**: 0 (all content is inline JSX)
- **State Hooks**: 0 (purely presentational)
- **External Dependencies**: 14 existing image assets
- **Complexity**: Minimal - this is the simplest page in the app

Ready to proceed to contracts definition.
