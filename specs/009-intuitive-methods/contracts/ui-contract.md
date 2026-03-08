# UI Contracts: Intuitive Methods Learning Page

**Feature**: 009-intuitive-methods  
**Date**: 2026-03-08  
**Purpose**: Define user interface contracts, component API, and integration points

## Overview

This feature adds a new page to the cfop-app single-page application. The "contract" in this context refers to:
1. **Route contract**: URL path and navigation behavior
2. **Component contract**: Props and rendering behavior  
3. **Layout contract**: Visual structure and responsive behavior
4. **Integration contract**: How the page integrates with existing app structure

This is a **web application** project, so contracts focus on UI component APIs rather than REST endpoints or library interfaces.

---

## 1. Route Contract

### Route Configuration

**Path**: `/intuitive`

**Hash Router Path**: `#/intuitive` (full URL: `http://127.0.0.1:5173/cubing.spec/#/intuitive`)

**Route Definition**:
```typescript
<Route path="/intuitive" element={<IntuitivePage />} />
```

**Parent Router**: HashRouter in App.tsx

**Navigation Access**:
- From navigation bar: Click "Intuitive" link
- Direct URL: Browser can navigate directly to `#/intuitive` path
- Programmatic: `navigate('/intuitive')` via react-router-dom

### Active State Behavior

**Indicator**: Navigation link shows active state when current route matches `/intuitive`

**Implementation**: useLocation() hook in CfopNavigation.tsx

**Visual Style**: Custom `.cfop-navbar-active` class (soft blue background, dark blue text, 4px border-radius)

### Expected Behavior

- **Initial Load**: If user opens app with `#/intuitive` hash, page renders directly
- **Navigation**: Clicking nav link updates hash and renders page without page reload
- **Back/Forward**: Browser back/forward buttons navigate route history correctly
- **Deep Link**: Shareable URL `#/intuitive` loads correct page state

---

## 2. Component Contract

### IntuitivePage Component

**File**: `cfop-app/src/pages/IntuitivePage.tsx`

**Type**: Route component (receives route props from react-router-dom)

**Props**: None - component receives routing context implicitly

**Return Type**: `JSX.Element`

**Dependencies**:
```typescript
import { CfopPageLayout } from '../components/CfopPageLayout';
import 'bulma/css/bulma.min.css';
import '../App.css';
```

**Component Signature**:
```typescript
export default function IntuitivePage(): JSX.Element {
  return (
    <CfopPageLayout
      pageTitle="Intuitive Methods"
      introText="Learn beginner-friendly Cross and F2L approaches without memorizing algorithms."
      introImageSrc={undefined} // Optional: could add solved cube image
      introImageAlt={undefined}
      actionButtons={undefined} // No actions needed for this page
    >
      {/* Content sections */}
    </CfopPageLayout>
  );
}
```

### CfopPageLayout Integration

**Wrapper Component**: IntuitivePage uses existing CfopPageLayout wrapper

**Required Props**:
- `pageTitle`: `"Intuitive Methods"`
- `introText`: Brief overview paragraph
- `children`: Main content sections (Cross, F2L)

**Optional Props** (not used):
- `introImageSrc`: Could add visual intro (not required by spec)
- `introImageAlt`: Alt text if intro image provided
- `actionButtons`: Could add future interactive features

**Layout Behavior**:
- CfopPageLayout renders CfopNavigation at top
- Page title displayed in intro section
- Intro text and optional image in primer panel
- Children render in main content area below intro
- Responsive layout handles mobile/tablet/desktop breakpoints

---

## 3. Layout Contract

### Page Structure

```text
┌─────────────────────────────────────┐
│ CfopNavigation                      │
│ [2LK] [Intuitive] [F2L] [OLL] [PLL] │
├─────────────────────────────────────┤
│ Intro Section                       │
│ ┌─────────────────────────────────┐ │
│ │ Page Title: Intuitive Methods   │ │
│ │ Brief overview paragraph        │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ Content Section: Intuitive Cross    │
│ ┌───────┬───────┬───────┐          │
│ │ Case  │ Case  │ Case  │          │
│ │ Image │ Image │ Image │          │
│ └───────┴───────┴───────┘          │
├─────────────────────────────────────┤
│ Content Section: Intuitive F2L      │
│ Step 1: easy inserts                │
│ ┌─────┬─────┬─────┬─────┐          │
│ │ Img │ Img │ Img │ Img │          │
│ └─────┴─────┴─────┴─────┘          │
│ Step 2: setup pairs                 │
│ ┌─────┬─────┬─────┬─────┐          │
│ │ Img │ Img │ Img │ Img │          │
│ └─────┴─────┴─────┴─────┘          │
│ Step 3: insert pairs                │
│ ┌───────┬───────┬───────┐          │
│ │ Image │ Image │ Image │          │
│ └───────┴───────┴───────┘          │
└─────────────────────────────────────┘
```

### Responsive Breakpoints

**Mobile** (< 769px):
- Navigation: Hamburger menu (existing behavior)
- Image grids: 1 column (stacked vertically)
- Text: Full width, no horizontal scroll

**Tablet** (769px - 1023px):
- Navigation: Horizontal link list
- 3-image grids: 2 columns
- 4-image grids: 2 columns  
- Text: Comfortable line length with padding

**Desktop** (≥ 1024px):
- Navigation: Horizontal link list
- 3-image grids: 3 columns
- 4-image grids: 4 columns
- Text: Max-width container for readability

### CSS Classes

**Section Wrapper**:
```html
<section className="section">
  <h2 className="title is-4 has-text-centered">Section Title</h2>
  <!-- content -->
</section>
```

**Image Grid**:
```html
<div className="columns is-multiline">
  <div className="column is-one-third-desktop is-half-tablet">
    <div className="card">
      <div className="card-content has-text-centered">
        <img src="/cubing.spec/assets/..." alt="..." />
        <p className="is-size-7 mt-2">Caption text</p>
        <p className="is-family-monospace has-text-grey-dark is-size-7">U R U' R'</p>
      </div>
    </div>
  </div>
</div>
```

**Typography**:
- Section headings: `.title.is-4` (h2 semantic)
- Subsection headings: `.subtitle.is-5` or `<h3>` with `.title.is-5`
- Body text: `<p>` with default Bulma styling
- Lists: `<ul>` / `<li>` with default styling
- Captions: `.is-size-7` (small text)
- Algorithm hints: `.is-family-monospace` + `.has-text-grey-dark`

---

## 4. Navigation Contract

### CfopNavigation Update

**File**: `cfop-app/src/components/CfopNavigation.tsx`

**Change Required**: Add new navigation item

**Navigation Items Array**:
```typescript
const navItems = [
  { path: '/2lk', label: '2LK' },
  { path: '/intuitive', label: 'Intuitive' }, // NEW
  { path: '/f2l', label: 'F2L' },
  { path: '/oll', label: 'OLL' },
  { path: '/pll', label: 'PLL' },
];
```

**Position Rationale**: 
- Pedagogical order: Beginners learn intuitive methods before algorithms
- 2LK is "beginner algorithmic" (2-look), Intuitive is "beginner non-algorithmic"
- Natural learning progression: 2LK → Intuitive → F2L (full algorithmic)

**Active State**:
- useLocation() detects current pathname
- Matches `/intuitive` → adds `.cfop-navbar-active` class
- Visual feedback confirms current page

**Mobile Behavior**:
- Hamburger menu already implemented (Feature 006)
- 5 total items fit comfortably in vertical mobile menu
- No overflow or scrolling issues

---

## 5. Asset Contract

### Image Path Contract

**Base Path**: `/cubing.spec/assets/cfop_bgr/`

**Path Resolution**:
- Dev server: Vite resolves from `cfop-app/public/`
- Production build: Copied to dist output directory
- Absolute paths work in both environments

**Required Assets** (all exist):

| Asset | Purpose | Alt Text Example |
|-------|---------|------------------|
| cross_case2.png | Cross positioned not oriented | "White edge positioned but not oriented on yellow face" |
| cross_case3.png | Cross oriented not positioned | "White edge oriented but in wrong slot position" |
| cross_case4.png | Cross flipped | "White edge flipped in middle layer" |
| f2l_case1_insert1.png | Easy insert connected right | "F2L pair connected with matching colors facing right" |
| f2l_case1_insert2.png | Easy insert connected left | "F2L pair connected with matching colors facing left" |
| f2l_case1_insert3.png | Easy insert disconnected right | "F2L pair disconnected with white facing right" |
| f2l_case1_insert4.png | Easy insert disconnected left | "F2L pair disconnected with white facing left" |
| f2l_case2_stuck1.png | Setup edge in slot | "F2L edge piece in slot, corner in top layer" |
| f2l_case2_stuck2.png | Setup corner in slot | "F2L corner in slot, edge in top layer" |
| f2l_case2_stuck3.png | Setup pair misaligned in slot | "F2L pair in slot but misaligned orientation" |
| f2l_case2_stuck4.png | Setup pair misaligned in layer | "F2L pair in top layer but misaligned" |
| f2l_case3_setup1.png | Insert white to side match | "White sticker on side, edge color matches center" |
| f2l_case3_setup2.png | Insert white to side no match | "White sticker on side, edge color opposite center" |
| f2l_case3_setup3.png | Insert white is up | "White sticker facing up in top layer" |

**Missing Asset Handling**:
- Browser displays broken image icon (standard behavior)
- Page continues to render remaining content (FR-009 graceful degradation)
- No custom error boundaries needed

---

## 6. Accessibility Contract

### Semantic HTML

- Use `<section>` for major content blocks
- Use heading hierarchy: `<h2>` → `<h3>` (no skipped levels)
- Use `<ul>` / `<li>` for bullet lists
- Use `<img alt="...">` for all images

### Alt Text Requirements

- **Descriptive**: Explain what the cube state shows
- **Concise**: 1-2 sentences maximum
- **Context-aware**: Reference the solving concept being illustrated
- **Not redundant**: Don't repeat adjacent caption text verbatim

### Keyboard Navigation

- Tab key navigates through nav links (inherited from CfopNavigation)
- No interactive elements within content (no modals, buttons, or toggles)
- Focus indicators visible (default browser styling)

### Screen Reader Support

- Page title announced via `<h1>` equivalent (from CfopPageLayout)
- Section headings create navigable outline
- Image alt text provides context for visuals
- List structure conveys step sequences

---

## 7. Performance Contract

### Load Time Expectations

- **First Contentful Paint**: < 1s (static content, no data fetching)
- **Largest Contentful Paint**: < 1.5s (includes image loading)
- **Time to Interactive**: < 1s (no JavaScript interactions)

### Asset Loading

- 14 PNG images (each ~20-50KB typical cube image size)
- Total asset load: ~300-700KB
- Images load progressively (browser default behavior)
- No lazy loading needed (content above fold, small file sizes)

### Bundle Impact

- Single new TypeScript/JSX file (~5-8KB compiled)
- No new dependencies added
- Navigation component grows by 1 route entry (~100 bytes)
- Minimal impact on overall bundle size

---

## 8. Integration Points

### App.tsx Route Registration

**Change Required**:
```typescript
import IntuitivePage from './pages/IntuitivePage';

// ... in Routes component:
<Route path="/2lk" element={<BGRPage />} />
<Route path="/intuitive" element={<IntuitivePage />} /> {/* NEW */}
<Route path="/f2l" element={<F2LPage />} />
```

### CfopNavigation.tsx Menu Update

**Change Required**: Add navigation item (shown in section 4 above)

### No Changes Required

- **CfopPageLayout**: No modifications needed, used as-is
- **App.css**: Existing styles sufficient (may add optional refinements)
- **package.json**: No new dependencies
- **vite.config.ts**: No build config changes
- **Data files**: No JSON updates (static content)

---

## 9. Testing Contract

### Manual Test Checklist

**Route Navigation**:
- [ ] Click "Intuitive" in nav bar → page loads
- [ ] Direct URL `#/intuitive` → page loads
- [ ] Browser back from Intuitive → returns to previous page
- [ ] Active nav state highlights "Intuitive" when on page

**Content Rendering**:
- [ ] Page title "Intuitive Methods" displays
- [ ] Intro text displays correctly
- [ ] All 3 Cross case images load
- [ ] All 4 F2L easy insert images load
- [ ] All 4 F2L setup images load
- [ ] All 3 F2L insert logic images load
- [ ] All captions and algorithm hints display correctly

**Responsive Behavior**:
- [ ] Mobile (393px): Images stack vertically, no horizontal scroll
- [ ] Tablet (768px): Cross/F2L-3 show 2 columns, F2L-4 shows 2 columns
- [ ] Desktop (1024px+): Cross/F2L-3 show 3 columns, F2L-4 shows 4 columns
- [ ] Navigation hamburger menu works on mobile
- [ ] Text remains readable at all breakpoints

**Build Validation**:
- [ ] `npm run build` completes without errors
- [ ] Production build renders page correctly
- [ ] Asset paths resolve in production build

### Accessibility Test

- [ ] Tab navigation reaches all nav links
- [ ] Screen reader announces page title and section headings
- [ ] All images have non-empty alt text
- [ ] Heading hierarchy is semantic (no skipped levels)

---

## 10. Error Handling Contract

### Expected Errors

1. **Missing Image Asset**:
   - **Trigger**: Asset file deleted or path typo
   - **Behavior**: Browser shows broken image icon
   - **User Impact**: Content remains usable, missing visual reference noted
   - **Recovery**: User can continue reading text content

2. **Navigation Routing Error**:
   - **Trigger**: Invalid route path in Link component
   - **Behavior**: React Router shows 404 or redirects to home
   - **User Impact**: Cannot reach page via that link
   - **Recovery**: Fix route path and rebuild

3. **Build Error**:
   - **Trigger**: TypeScript syntax error or missing import
   - **Behavior**: Build fails with error message
   - **User Impact**: Dev cannot deploy broken build
   - **Recovery**: Fix TypeScript errors reported by compiler

### No Error Boundaries Needed

- Static content has no runtime errors (no data fetching, no state mutations)
- Component render errors caught by React default error boundary
- TypeScript compilation prevents most runtime errors at build time

---

## Summary

This feature's contracts are straightforward because it's a **presentational page** with **no interactivity**:

- **1 new route**: `/intuitive`
- **1 new component**: IntuitivePage.tsx
- **2 integration points**: App.tsx routes, CfopNavigation items
- **14 existing assets**: All images already present
- **0 new dependencies**: Uses existing React, Bulma, React Router
- **0 API calls**: Static content only
- **0 state management**: Pure presentation

Ready to proceed to quickstart guide generation.
