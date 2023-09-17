import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import path from 'path'

const manifestForPlugin = {
  registerType: 'prompt',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: '_LoungeFi',
    short_name: '_LoungeFi',
    description: 'A -very- simple app to keep focus on your daily tasks.',
    icons: [
      {
        src: '/favicon.svg',
        size: '100x100',
        type: 'image/svg+xml'
      }
    ],
    theme_color: '#4FB9D0',
    background_color: '#0F1013',
    display: 'standalone',
    scope: '/',
    start_utl: '/',
    orientation: 'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@store': path.resolve(__dirname, './src/store'),
      '@scripts': path.resolve(__dirname, './src/scripts'),
      '@router': path.resolve(__dirname, './src/router'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, './__tests__/setup.js')]
  }
})
