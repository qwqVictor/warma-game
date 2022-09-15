import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    proxy: {
      '/data': {
        target: 'http://warmagame.qwq.ren',
        changeOrigin: true
      },
      '/lab': {
        target: 'http://warmagame.qwq.ren',
        changeOrigin: true
      },
    }
  },
})