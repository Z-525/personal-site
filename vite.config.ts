import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 配置：React 插件 + 开发服务器默认端口 5173
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
