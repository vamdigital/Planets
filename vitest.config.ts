/// <reference types="vitest" />

import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    watch: false,
    exclude: [...configDefaults.exclude, './app/e2e/*']
  }
})
