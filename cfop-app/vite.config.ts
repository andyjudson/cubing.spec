import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cubing.spec/',
  optimizeDeps: {
    exclude: ['cubing/scramble'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        // Ensure workers are placed in a predictable location
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name.includes('worker') || chunkInfo.name.includes('search')) {
            return 'assets/[name]-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },
      },
    },
  },
})
