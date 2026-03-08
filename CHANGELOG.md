# Changelog

## 2026-03-08 (retrospective) - Features 001-005 Baseline

### Feature 001 - Beginner 2-look Algorithm Cases Grid
- Added static learning grids for beginner/2-look CFOP cases.
- Structured OLL and PLL by edge/corner groupings with consistent card layout.
- Added mobile-friendly responsive presentation for algorithm browsing.

### Feature 002 - Algorithm Notes on Hover
- Added hover/tap tooltips for algorithm notes.
- Integrated markdown rendering for note content.
- Tuned light-theme styling for readability and consistent section presentation.

### Feature 003 - Algorithm Demo with cubing.js
- Added random algorithm demo modal with TwistyPlayer visualization.
- Implemented custom playback controls (play/pause/rewind/speed).
- Added synchronized move highlighting tied to player timeline events.

### Feature 004 - Practice Scramble + Solve Timer Modal
- Added dedicated practice modal with scramble generation and solve timer.
- Added deterministic timer state flow (`idle`, `running`, `stopped`).
- Added running-state protection to prevent scramble changes during active timing.

### Feature 005 - Persistent Solve Time Stats
- Added localStorage-backed solve history persistence.
- Added stats display for last solve, rolling average of 5, and personal best.
- Added reset flow and defensive validation for corrupted storage data.

## 2026-03-08 - Feature 006: Local Scramble Generator

### Added
- Local 3x3 scramble generator in [cfop-app/src/utils/scrambleGenerator.ts](cfop-app/src/utils/scrambleGenerator.ts)
- 20-move practice scramble generation with quality constraints
- Typed success/failure result model for generation outcomes
- Timeout wrapper with 1000ms failure handling
- Repository-level [README.md](README.md) and [LICENSE](LICENSE)

### Changed
- Practice scramble integration now uses local generator in [cfop-app/src/utils/scramble.ts](cfop-app/src/utils/scramble.ts)
- Renamed generator module from `fallbackScrambleGenerator` to `scrambleGenerator`
- Updated spec artifacts under [specs/006-fallback-scramble-generator](specs/006-fallback-scramble-generator)
- Added local dev-server stability guidance in [.github/copilot-instructions.md](.github/copilot-instructions.md)

### Removed
- Runtime dependence on `cubing/scramble` workers for scramble generation
- Legacy worker-specific Vite workaround configuration for scramble generation paths

### Validation
- Local production build passes (`npm run build`)
- Manual local feature checks passed for scramble flow, timer flow, and persistence
- GitHub Pages production URL responds successfully
