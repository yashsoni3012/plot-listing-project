import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      // ... your existing rollup options if any
    }
  }
})