# Copilot Instructions (Current Work)

## Scope
- Primary project: `cubing.spec`
- Current implementation target: `cubing.spec/new-cubing-site`
- Ignore `cubing.react` and `cubing.static` unless explicitly requested.

## Current build goal
- Build only the current spec iteration in `spec.md`:
  - single-page 2-look beginner cases grid
  - include 3-look essentials section
  - no advanced features unless explicitly requested via new spec command

## Resource usage
- Reuse shared resources from `cubing.spec/shared-data` and `cubing.spec/shared-assets`
- Prefer symlinks; do not copy shared assets/data into app folders

## Working style
- Iterate in small steps
- Keep implementation details out of high-level spec unless promoted intentionally
- Treat `legacy.md` as historical project context only