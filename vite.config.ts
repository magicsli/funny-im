import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join, resolve } from 'path'
import vitePluginImp from 'vite-plugin-imp'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/lib/${name}/style/index.css`
        }
      ]
    })
  ],
  server: {
    port: 9527,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  envDir: resolve(__dirname, './env'),
  resolve: {
    alias: {
      '@': join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 草！ 他是给每个文件默认引入， 所以相对地址不是这里， 而是其页面的位置
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
