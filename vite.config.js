import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/jaimegd90/react-cards-bootstrap/",
  plugins: [react()],
})
