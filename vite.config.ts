import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join, resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: resolve(__dirname, './env'),
  resolve: {
    alias: {
      '@': join(__dirname, 'src')
    }
  }
})
