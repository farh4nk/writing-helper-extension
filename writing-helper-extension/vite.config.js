import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: 'static',
    rollupOptions: {
      // Custom Rollup options can be added here
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
