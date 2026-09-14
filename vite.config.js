import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// React and Tailwind plugins
export default defineConfig({
  plugins: [react(), tailwindcss()],
})