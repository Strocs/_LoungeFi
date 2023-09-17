export const manifestForPlugin = {
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
