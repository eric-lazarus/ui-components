import { defineConfig } from 'vite'
// import { dirname, resolve } from 'node:path'
// import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

// const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), libInjectCss()],
    build: {
      rollupOptions: {
        external: ['react', 'react/jsx-runtime'],
        input: Object.fromEntries(
          glob.sync('lib/**/*.{js,jsx}', {
            ignore: ["lib/**/*.d.js"],
          }).map(file => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative(
              'lib',
              file.slice(0, file.length - extname(file).length)
            ),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url))
          ])
        ),
        output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
        }
      },
      lib: {
        entry: ['lib/main.js'],
        formats: ['es']
      }
    }
})
