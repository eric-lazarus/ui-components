import { defineConfig } from 'vite'
// import { dirname, resolve } from 'node:path'
// import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
    build: {
      rollupOptions: {
        external: ['react', 'react/jsx-runtime'],
      },
      lib: {
        entry: ['lib/main.js'],
        formats: ['es']
      }
    }
})
