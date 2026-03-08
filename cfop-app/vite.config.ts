import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Workaround for cubing.js worker loading in production builds
// See: https://github.com/vitejs/vite/issues/14499#issuecomment-1740267849
const workerImportMetaUrlRE =
  /\bnew\s+(?:Worker|SharedWorker)\s*\(\s*(new\s+URL\s*\(\s*('[^']+'|"[^"]+"|`[^`]+`)\s*,\s*import\.meta\.url\s*\))/g

export default defineConfig({
  plugins: [react()],
  base: '/cubing.spec/',
  optimizeDeps: {
    exclude: ['cubing/scramble'],
  },
  worker: {
    format: 'es',
    plugins: () => [
      {
        name: 'cubing-worker-workaround',
        enforce: 'pre',
        transform(code: string) {
          if (code.includes('new Worker') && code.includes('new URL') && code.includes('import.meta.url')) {
            const result = code.replace(workerImportMetaUrlRE, `((() => { throw new Error('Nested workers are disabled') })()`)
            return result
          }
        }
      }
    ],
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/worker/[name]-[hash].js',
        assetFileNames: 'assets/worker/[name]-[hash].js'
      }
    }
  }
})
