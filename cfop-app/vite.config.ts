import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cubing.spec/',
  optimizeDeps: {
    exclude: ['cubing/scramble'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'cubing': ['cubing/alg', 'cubing/twisty'],
        }
      }
    }
  }
})
