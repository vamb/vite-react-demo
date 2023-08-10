import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 8002, // 设置服务启动端口号
    open: true, // 默认打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api/': {
        target: 'http://10.0.48.11:803/',
        changeOrigin: true,
        pathRewrite: { '^': '' },
      }
    }

  }
})
