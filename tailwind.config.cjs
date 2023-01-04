/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-cyan': 'var(--cyan)',
        'c-magenta': 'var(--magenta)',
        'c-text': 'var(--text)',
        'c-bg': 'var(--main-background)',
        'c-box': 'var(--box-background)',
        'c-gray': 'var(--gray)',
        'c-extra': 'var(--extra)'
      },
    }
  },
  plugins: []
}
