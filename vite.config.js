import {defineConfig, resolveConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { svgBuilder } from './src/plugins/svgBuilder';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/dev': {
        // target: 'http://sqm.test.com/sqm',
        target: 'http://192.168.64.220:8080/sqm',
      }
    }

  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    svgBuilder('./src/assets/icons/')
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', 'src')
    }
  }
})
