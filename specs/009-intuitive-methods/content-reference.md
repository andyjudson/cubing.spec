# Content Reference: Intuitive Methods

**Source**: cubing.react/cfop-app/src/pages/IntuitivePage.tsx  
**Purpose**: Extract educational content (text + images + ordering) for Feature 009 implementation  
**Date**: 2026-03-08

---

## Section 1: Intuitive Cross

### Introductory Text

The goal of this step is to start to the solve the first layer, orientating the white face edges so their other colour aligns with the matching side center colour. The cross can always be solved in 8 moves or less. It is best to solve with white as the bottom layer, start with easy cases, try not to disrupt solved edges (i.e. take out, safely open slot, re-insert), remember opposite colours (red/orange, green/blue) and avoid cube rotations.

### Step Guidance (Bullet List)

- If a white edge is positioned but not oriented e.g. in the yellow face, align edge to match the side, and rotate it round to target slot.
- If a white edge is oriented but not positioned, take the edge out, then re-insert it in target slot.
- If a white edge is flipped, take the edge out, open the target slot, then re-insert it in target slot.

### Visual Examples (3 cases)

| Label | Image | Algorithm |
|-------|-------|-----------|
| positioned<br/>not oriented | `cross_case2.png` | _(none specified)_ |
| oriented not<br/>positioned | `cross_case3.png` | _(none specified)_ |
| flipped | `cross_case4.png` | _(none specified)_ |

**Note**: Images are 3-column grid (desktop), 2-column (tablet), 1-column (mobile)

---

## Section 2: Intuitive F2L

### Introductory Text

The goal of this step is to efficiently solve the first two layers, slotting edge-corner pairs around the cross. The intuitive method uses a combination of a few repeated patterns, and setting up cases to allow you to slot an edge-corner pair into position. There are 4 easy insert cases when edge-corner pairs are in the top layer, and you can use a few tricks to setup all other cases ready for an easy insert. CubeHead explains this method really well, so watch his video! You'll gradually learn the logic of these intuitive methods through practicing solves.

### Subsection 2.1: Step 1 - easy inserts

#### Step Guidance

- If matching colours facing up, hold cube to right if colours match on right, or vice versa, then push pair aside, open slot, insert, close slot.
- If different colours facing up, hold cube to right if white facing right, or vice versa, then setup pair, insert, realign cross.

#### Visual Examples (4 cases)

| Label | Image | Algorithm |
|-------|-------|-----------|
| connected<br/>right pair | `f2l_case1_insert1.png` | `U R U' R'` |
| connected<br/>left pair | `f2l_case1_insert2.png` | `U' L' U L` |
| disconnected<br/>right pair | `f2l_case1_insert3.png` | `R U R'` |
| disconnected<br/>left pair | `f2l_case1_insert4.png` | `L' U' L` |

**Note**: Images are 4-column grid (desktop), 2-column (tablet), 1-column (mobile)

---

### Subsection 2.2: Step 2 - setup pairs

#### Step Guidance

- Find an edge-corner pair.
- Setup easy insert with pair disconnected in the top layer.
- Insert aligned pair in target slot whilst not impacting previously solved cases.

#### Visual Examples (4 cases)

| Label | Image | Algorithm |
|-------|-------|-----------|
| edge in slot<br/>+ corner in layer | `f2l_case2_stuck1.png` | `R U R' ...` |
| corner in slot<br/>+ edge in layer | `f2l_case2_stuck2.png` | `R U R' ...` |
| pair misaligned<br/>in slot | `f2l_case2_stuck3.png` | `R U' R' ...` |
| pair misaligned<br/>in layer | `f2l_case2_stuck4.png` | `R U2 R' ...` |

**Note**: Images are 4-column grid (desktop), 2-column (tablet), 1-column (mobile)

---

### Subsection 2.3: Step 3 - insert pairs

#### Step Guidance

- If white to side + colours match, move the edge next to the corner to setup an insert pair case.
- If white to side + colours not match, move the edge across from the corner to setup an insert pair case.
- If white is up, move the edge over its centre, turn it to safety, move corner over the edge to setup an insert pair case.

#### Visual Examples (3 cases)

| Label | Image | Algorithm |
|-------|-------|-----------|
| white to side<br/>+ colours match | `f2l_case3_setup1.png` | _(none specified)_ |
| white to side<br/>+ colours not match | `f2l_case3_setup2.png` | _(none specified)_ |
| white is up | `f2l_case3_setup3.png` | _(none specified)_ |

**Note**: Images are 3-column grid (desktop), 2-column (tablet), 1-column (mobile)

---

## Content Organization Summary

### Page Structure
1. **Intuitive Cross** (section)
   - Intro paragraph
   - 3 bullet points
   - 3-column image grid (3 cases)

2. **Intuitive F2L** (section)
   - Intro paragraph
   - **Step 1: easy inserts** (subsection)
     - 2 bullet points
     - 4-column image grid (4 cases with algorithms)
   - **Step 2: setup pairs** (subsection)
     - 3 bullet points
     - 4-column image grid (4 cases with partial algorithms)
   - **Step 3: insert pairs** (subsection)
     - 3 bullet points
     - 3-column image grid (3 cases)

### Asset Inventory

All images in `/cubing.spec/cfop-app/public/assets/cfop_bgr/`:

**Cross** (3 images):
- cross_case2.png
- cross_case3.png
- cross_case4.png

**F2L Step 1** (4 images):
- f2l_case1_insert1.png
- f2l_case1_insert2.png
- f2l_case1_insert3.png
- f2l_case1_insert4.png

**F2L Step 2** (4 images):
- f2l_case2_stuck1.png
- f2l_case2_stuck2.png
- f2l_case2_stuck3.png
- f2l_case2_stuck4.png

**F2L Step 3** (3 images):
- f2l_case3_setup1.png
- f2l_case3_setup2.png
- f2l_case3_setup3.png

**Total**: 14 images

---

## Implementation Notes

### Content Adaptations Needed

1. **Intro text refinement**: Consider slightly shortening/tightening for readability
2. **CubeHead reference**: Decide whether to keep external video reference or remove
3. **Algorithm hints**: F2L Step 2 has incomplete algorithms ("...") - decide whether to complete or remove
4. **Caption formatting**: Maintain line breaks in labels for readability

### Responsive Behavior

- **3-column grids**: Cross, F2L Step 3
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column

- **4-column grids**: F2L Step 1, F2L Step 2
  - Desktop: 4 columns
  - Tablet: 2 columns
  - Mobile: 1 column

### Content Completeness

All required content is present:
- ✅ Instructional text for all sections
- ✅ Step-by-step guidance bullets
- ✅ Image labels and captions
- ✅ Algorithm hints where applicable
- ✅ All 14 image assets available
