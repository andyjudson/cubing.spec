# Quickstart Guide: Intuitive Methods Learning Page

**Feature**: 009-intuitive-methods  
**Date**: 2026-03-08  
**Audience**: Developers implementing this feature  
**Estimated Implementation Time**: 2-3 hours

## Overview

This guide walks through implementing the Intuitive Methods page - a static instructional content page teaching beginner Cross and F2L solving techniques. The implementation reuses existing patterns from BGRPage, F2LPage, OLLPage, and PLLPage.

---

## Prerequisites

### Environment Setup

1. **Development Environment Running**:
   ```bash
   cd /Users/Andy/Documents/TechLab/cubing.spec
   git checkout 009-intuitive-methods
   cd cfop-app
   npm install  # Ensure dependencies are installed
   ```

2. **Dev Server Available** (for testing):
   ```bash
   npm run dev -- --host 127.0.0.1 --port 5173
   ```
   Access at: http://127.0.0.1:5173/cubing.spec/

3. **Assets Verified**:
   ```bash
   ls -la public/assets/cfop_bgr/ | grep -E 'cross|f2l'
   # Should show 14 PNG files
   ```

### Knowledge Requirements

- Familiarity with React 19 functional components
- Understanding of react-router-dom HashRouter
- Basic TypeScript (minimal types needed)
- Bulma CSS column system
- Existing cfop-app page structure (review BGRPage.tsx as reference)

---

## Implementation Steps

### Step 1: Create IntuitivePage Component (15-20 minutes)

**File**: `cfop-app/src/pages/IntuitivePage.tsx`

**Template Structure**:
```typescript
import { CfopPageLayout } from '../components/CfopPageLayout';
import 'bulma/css/bulma.min.css';
import '../App.css';

export default function IntuitivePage() {
  return (
    <CfopPageLayout
      pageTitle="Intuitive Methods"
      introText="Learn beginner-friendly Cross and F2L solving approaches without memorizing algorithms. Build intuition through understanding piece relationships and movement patterns."
    >
      {/* Content sections go here */}
    </CfopPageLayout>
  );
}
```

**Content Sections to Add**:

1. **Intuitive Cross Section**:
```tsx
<section className="section">
  <h2 className="title is-4 has-text-centered">Intuitive Cross</h2>
  <p>
    The goal of this step is to solve the first layer edges, orienting the white 
    face edges so their other color aligns with the matching center color. The 
    cross can always be solved in 8 moves or less. Best practices: solve with 
    white on bottom, start with easy cases, avoid disrupting solved edges, 
    remember opposite colors (red/orange, green/blue), minimize cube rotations.
  </p>
  <ul>
    <li>If a white edge is positioned but not oriented (e.g., in yellow face), align edge to match side center, then rotate it to target slot.</li>
    <li>If a white edge is oriented but not positioned, take edge out, then re-insert in target slot.</li>
    <li>If a white edge is flipped in middle layer, take edge out, open target slot, then re-insert.</li>
  </ul>

  <div className="columns is-multiline">
    <div className="column is-one-third-desktop is-half-tablet">
      <div className="card">
        <div className="card-content has-text-centered">
          <h3 className="subtitle is-6">positioned<br/>not oriented</h3>
          <img 
            src="/cubing.spec/assets/cfop_bgr/cross_case2.png" 
            alt="White edge positioned on yellow face but not oriented correctly"
            style={{ maxWidth: '120px', margin: '0 auto' }}
          />
        </div>
      </div>
    </div>

    <div className="column is-one-third-desktop is-half-tablet">
      <div className="card">
        <div className="card-content has-text-centered">
          <h3 className="subtitle is-6">oriented not<br/>positioned</h3>
          <img 
            src="/cubing.spec/assets/cfop_bgr/cross_case3.png" 
            alt="White edge oriented correctly but in wrong slot position"
            style={{ maxWidth: '120px', margin: '0 auto' }}
          />
        </div>
      </div>
    </div>

    <div className="column is-one-third-desktop is-half-tablet">
      <div className="card">
        <div className="card-content has-text-centered">
          <h3 className="subtitle is-6">flipped</h3>
          <img 
            src="/cubing.spec/assets/cfop_bgr/cross_case4.png" 
            alt="White edge flipped in middle layer requiring extraction"
            style={{ maxWidth: '120px', margin: '0 auto' }}
          />
        </div>
      </div>
    </div>
  </div>
</section>
```

2. **F2L Intro + Step 1 (Easy Inserts)**:
```tsx
<section className="section">
  <h2 className="title is-4 has-text-centered">Intuitive F2L</h2>
  <p>
    The goal of this step is to efficiently solve the first two layers by slotting 
    edge-corner pairs around the cross. The intuitive method uses repeated patterns 
    and setup techniques to position pairs for easy insertion. Master these foundational 
    cases first, then learn to set up any case into an easy insert position.
  </p>

  <h3 className="title is-5 mt-5">Step 1: Easy Inserts</h3>
  <ul>
    <li>If matching colors face up: hold cube so colors match on right (or left), push pair aside, open slot, insert, close slot.</li>
    <li>If different colors face up: hold cube so white faces right (or left), set up pair, insert, realign cross.</li>
  </ul>

  <div className="columns is-multiline">
    {/* 4-column grid for F2L inserts */}
    <div className="column is-one-quarter-desktop is-half-tablet">
      <div className="card">
        <div className="card-content has-text-centered">
          <h4 className="subtitle is-6">connected<br/>right pair</h4>
          <img 
            src="/cubing.spec/assets/cfop_bgr/f2l_case1_insert1.png" 
            alt="F2L pair connected with matching colors facing right"
            style={{ maxWidth: '100px', margin: '0 auto' }}
          />
          <p className="is-family-monospace has-text-grey-dark is-size-7 mt-2">U R U' R'</p>
        </div>
      </div>
    </div>

    {/* Repeat for insert2, insert3, insert4 with corresponding images and algorithms */}
    {/* ... (3 more columns following same pattern) */}
  </div>
</section>
```

3. **F2L Step 2 (Setup Pairs)** - Similar structure with 4 stuck cases

4. **F2L Step 3 (Insert Logic)** - 3-column grid with setup cases

**Reference**: Port content directly from `/Users/Andy/Documents/TechLab/cubing.react/cfop-app/src/pages/IntuitivePage.tsx`, adapting:
- `IonGrid` → `<div className="columns is-multiline">`
- `IonCol size="4"` → `<div className="column is-one-third-desktop is-half-tablet">`
- `IonCol size="6" size-md="3"` → `<div className="column is-one-quarter-desktop is-half-tablet">`
- `.cube-model-sm` → inline style `{ maxWidth: '100px', margin: '0 auto' }`
- Add Bulma `.card` wrapper for each image case

---

### Step 2: Register Route in App.tsx (5 minutes)

**File**: `cfop-app/src/App.tsx`

**Add Import**:
```typescript
import IntuitivePage from './pages/IntuitivePage';
```

**Add Route** (insert between 2LK and F2L routes):
```typescript
<Routes>
  <Route path="/2lk" element={<BGRPage />} />
  <Route path="/intuitive" element={<IntuitivePage />} />
  <Route path="/f2l" element={<F2LPage />} />
  <Route path="/oll" element={<OLLPage />} />
  <Route path="/pll" element={<PLLPage />} />
  <Route path="/" element={<Navigate to="/2lk" replace />} />
</Routes>
```

---

### Step 3: Update Navigation Menu (10 minutes)

**File**: `cfop-app/src/components/CfopNavigation.tsx`

**Find Navigation Items Array** (likely around line 30-50):
```typescript
const navItems = [
  { path: '/2lk', label: '2LK' },
  { path: '/f2l', label: 'F2L' },
  // ...
];
```

**Update to Include Intuitive**:
```typescript
const navItems = [
  { path: '/2lk', label: '2LK' },
  { path: '/intuitive', label: 'Intuitive' },  // NEW
  { path: '/f2l', label: 'F2L' },
  { path: '/oll', label: 'OLL' },
  { path: '/pll', label: 'PLL' },
];
```

**Verify Active State Logic** (should already handle new route automatically via `useLocation()`).

---

### Step 4: Test in Dev Server (20-30 minutes)

1. **Start/Restart Dev Server**:
   ```bash
   # Kill existing if running
   pkill -f "vite.*5173"
   
   # Start fresh
   cd /Users/Andy/Documents/TechLab/cubing.spec/cfop-app
   npm run dev -- --host 127.0.0.1 --port 5173
   ```

2. **Visual Inspection Checklist**:
   - [ ] Navigate to http://127.0.0.1:5173/cubing.spec/#/intuitive
   - [ ] Page title "Intuitive Methods" displays
   - [ ] Intro text renders correctly
   - [ ] Navigation bar shows "Intuitive" between "2LK" and "F2L"
   - [ ] "Intuitive" nav item has active state (soft blue background)
   - [ ] All 3 Cross case images load and display
   - [ ] All 4 F2L easy insert images load with algorithm hints
   - [ ] All 4 F2L setup images load
   - [ ] All 3 F2L insert logic images load

3. **Responsive Testing**:
   ```bash
   # Use browser dev tools to test viewports:
   # - iPhone 16 (393px width)
   # - iPad (768px width)
   # - Desktop (1280px+ width)
   ```
   
   Check:
   - [ ] Mobile: Images stack vertically (1 column), no horizontal scroll
   - [ ] Tablet: 3-image grids show 2 columns, 4-image grids show 2 columns
   - [ ] Desktop: 3-image grids show 3 columns, 4-image grids show 4 columns
   - [ ] Hamburger menu appears on mobile and works correctly

4. **Navigation Testing**:
   - [ ] Click "Intuitive" in nav → page loads
   - [ ] Click "2LK" → navigates away from Intuitive
   - [ ] Browser back button → returns to Intuitive
   - [ ] Direct URL `#/intuitive` → loads page directly

---

### Step 5: Build Validation (10 minutes)

**Run Production Build**:
```bash
cd /Users/Andy/Documents/TechLab/cubing.spec/cfop-app
npm run build
```

**Expected Output**: Build completes without errors

**Check for Warnings**:
- Asset path warnings → verify all image paths correct
- TypeScript errors → fix type issues
- Bundle size warnings → acceptable (single new page adds <10KB)

**Optional: Test Production Build Locally**:
```bash
npm run preview
# Test at preview URL to confirm asset paths work in production
```

---

## Troubleshooting

### Dev Server Won't Start

**Problem**: Port 5173 already in use

**Solution**:
```bash
# Check for existing processes
lsof -i :5173

# Kill existing Vite processes
pkill -f vite

# Restart
npm run dev -- --host 127.0.0.1 --port 5173
```

---

### Images Not Loading

**Problem**: Broken image icons appear

**Diagnosis**:
```bash
# Verify assets exist
ls -la /Users/Andy/Documents/TechLab/cubing.spec/cfop-app/public/assets/cfop_bgr/

# Check dev server asset resolution
curl http://127.0.0.1:5173/cubing.spec/assets/cfop_bgr/cross_case2.png
```

**Common Causes**:
- Path typo: `/cubing.spec/assets/` not `/assets/` (base path required)
- File extension case: `.png` not `.PNG`
- Asset deleted: Verify file exists in public/ directory

---

### Route Not Working

**Problem**: Clicking "Intuitive" nav link does nothing or 404s

**Diagnosis**:
1. Check browser console for React Router errors
2. Verify route path matches nav link path exactly (`/intuitive`)
3. Confirm IntuitivePage import at top of App.tsx
4. Check for typos in Route element prop

**Fix**: Double-check Step 2 and Step 3 implementations above

---

### Layout Broken on Mobile

**Problem**: Horizontal scrolling or images overflow

**Diagnosis**:
- Test at 393px viewport width in browser dev tools
- Check for fixed-width containers without max-width
- Verify Bulma column classes have responsive modifiers

**Fix**: Ensure all image containers use:
```tsx
<div className="column is-one-third-desktop is-half-tablet">
  {/* Content auto-stacks to 1 column on mobile */}
</div>
```

---

### Navigation Active State Not Working

**Problem**: "Intuitive" nav item not highlighted when on page

**Diagnosis**:
- Check CfopNavigation.tsx uses `useLocation()` hook
- Verify pathname comparison: `location.pathname === '/intuitive'`
- Confirm `.cfop-navbar-active` CSS class exists in App.css

**Fix**: Review existing BGRPage nav highlighting logic and replicate pattern

---

## Testing Checklist

Copy this checklist to validate implementation:

### Functional Tests
- [ ] Route `/intuitive` renders IntuitivePage
- [ ] Navigation item "Intuitive" appears in correct position (after 2LK, before F2L)
- [ ] Navigation item highlights when on Intuitive page
- [ ] All 14 images load successfully (3 Cross + 11 F2L)
- [ ] All text content renders correctly (headings, paragraphs, lists)
- [ ] Algorithm hints display in monospace font

### Responsive Tests
- [ ] Mobile (393px): Single column layout, no horizontal scroll
- [ ] Tablet (768px): 2-column grids for both 3-item and 4-item cases
- [ ] Desktop (1024px+): 3-column for 3-item, 4-column for 4-item grids
- [ ] Hamburger menu works on mobile viewports

### Integration Tests
- [ ] Navigate between all 5 pages (2LK, Intuitive, F2L, OLL, PLL) without errors
- [ ] Browser back/forward navigation works correctly
- [ ] Direct URL access via hash route works
- [ ] Active nav state updates correctly across all pages

### Build Tests
- [ ] `npm run build` completes without errors
- [ ] No TypeScript compilation errors
- [ ] No asset path warnings
- [ ] Bundle size increase is reasonable (<20KB)

### Accessibility Tests
- [ ] All images have non-empty alt text
- [ ] Heading hierarchy is semantic (h2 → h3, no skips)
- [ ] Keyboard tab navigation reaches all nav links
- [ ] Screen reader announces page title and sections

---

## Completion Criteria

Feature is complete when:

1. ✅ IntuitivePage component created and renders all content
2. ✅ Route registered in App.tsx
3. ✅ Navigation menu updated in CfopNavigation.tsx
4. ✅ All 14 images display correctly
5. ✅ Dev server renders page without errors
6. ✅ Production build succeeds
7. ✅ All testing checklist items pass
8. ✅ Manual review on iPhone 16 simulator (393px) confirms mobile layout

---

## Next Steps

After implementation:

1. **Manual Testing**: Complete full testing checklist above
2. **Create Implementation Summary**: Document actual implementation in `specs/009-intuitive-methods/implementation-summary.md`
3. **Commit Changes**:
   ```bash
   git add cfop-app/src/pages/IntuitivePage.tsx
   git add cfop-app/src/App.tsx
   git add cfop-app/src/components/CfopNavigation.tsx
   git commit -m "feat(009): add Intuitive Methods learning page"
   ```
4. **Proceed to /speckit.tasks**: Generate granular task checklist for implementation tracking

---

## Reference Materials

- **Legacy Implementation**: `/Users/Andy/Documents/TechLab/cubing.react/cfop-app/src/pages/IntuitivePage.tsx`
- **Existing Page Pattern**: `cfop-app/src/pages/BGRPage.tsx` (similar layout structure)
- **Layout Component**: `cfop-app/src/components/CfopPageLayout.tsx` (wrapper API)
- **Navigation Component**: `cfop-app/src/components/CfopNavigation.tsx` (menu structure)
- **Asset Directory**: `cfop-app/public/assets/cfop_bgr/` (image files)
- **Bulma Docs**: https://bulma.io/documentation/columns/ (responsive grid system)
- **React Router**: https://reactrouter.com/en/main (HashRouter usage)

---

## Estimated Timeline

| Task | Duration | Cumulative |
|------|----------|------------|
| Setup & asset verification | 10 min | 10 min |
| Create IntuitivePage component | 60 min | 70 min |
| Register route in App.tsx | 5 min | 75 min |
| Update navigation menu | 10 min | 85 min |
| Test in dev server | 30 min | 115 min |
| Build validation | 10 min | 125 min |
| Documentation & commit | 15 min | 140 min |

**Total**: ~2.5 hours for complete implementation and testing

---

## Success Metrics

Implementation meets success criteria (from spec.md) when:

- **SC-001**: ✅ Users can navigate to Intuitive page in one click from nav bar
- **SC-002**: ✅ Cross and F2L sections identifiable within 10 seconds
- **SC-003**: ✅ Test users can follow F2L step progression using only page guidance
- **SC-004**: ✅ No horizontal scrolling on 393px mobile baseline
- **SC-005**: ✅ Page renders remaining sections if any image is unavailable

Ready to implement! 🚀
