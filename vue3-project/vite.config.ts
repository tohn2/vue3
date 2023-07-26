import { defineConfig, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const pathSrc = path.resolve(__dirname, "src")
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  return {
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    plugins: [
      vue()
    ]
  }
})