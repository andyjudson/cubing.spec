# Quickstart — Feature 006 Fallback Scramble Generator

## Prerequisites
- Node/npm installed
- Repo cloned at `cubing.spec`
- Branch: `006-fallback-scramble-generator`

## 1) Install deps

```bash
cd cfop-app
npm install
```

## 2) Run app locally

```bash
npm run dev
```

Open the practice modal and verify:
- New scramble appears reliably
- No persistent `Generating...` hang
- Timer controls still work

## 3) Validate fallback quality rules

Generate many scrambles and spot-check:
- Exactly 20 moves each
- Tokens only from `U D L R F B` with `"" | "'" | "2"`
- No same-face consecutive moves
- No opposite-face A-B-A triples (`R L R`, `U D U`, etc.)

## 4) Validate parser compatibility

For sampled outputs, ensure `Alg.fromString(scramble)` succeeds (through app path).

## 5) Validate failure behavior

Simulate delay/error and confirm:
- Request times out at ~1000ms
- Last valid scramble remains visible
- Inline error is shown
- UI remains usable

## 6) Validate rapid-click concurrency

Click `New Scramble` rapidly (10+ times):
- Final scramble shown corresponds to latest click
- No stale overwrite

## 7) Build verification

```bash
npm run build
```

Confirm production build succeeds after Vite config simplification.

## 8) Regression pass

Check no regressions in:
- Start/stop/reset timer flow
- Solve recording
- Stats display and persistence
