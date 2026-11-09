import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Dev only: forward the contact API (dotnet run in ./api) — in prod Traefik routes /api
  server: { proxy: { '/api': 'http://127.0.0.1:5038' } },
})
