import type { CaptureRequest, VisualizationMode } from '../types/imageGenerator'

const TARGET_SIZE_3D = 288

export function createCaptureRequest(mode: VisualizationMode): CaptureRequest {
  const now = Date.now()

  return {
    requestedAtMs: now,
    filenameBase: `cubing-3x3-${now}`,
    mode,
    targetWidthPx: mode === '3d' ? TARGET_SIZE_3D : 0,
    targetHeightPx: mode === '3d' ? TARGET_SIZE_3D : 0,
    expectedFormat: mode === '3d' ? 'png' : 'svg',
  }
}
