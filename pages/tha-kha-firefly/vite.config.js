import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' ให้วาง dist ไว้ในโฟลเดอร์ย่อยหรือเปิดผ่านเซิร์ฟเวอร์ใดก็ได้
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 4180 },
})
