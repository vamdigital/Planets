/// <reference types="vitest" />

import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true
    }),
    viteTsconfigPaths()
  ],
  test: {
    environment: 'jsdom',
    watch: false,
    exclude: [...configDefaults.exclude, './app/e2e/*']
  }
})
