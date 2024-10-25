/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        blue: '#4FB9D0',
        darkGrey: '#3E3E3E',
        red: '#D04F4F',
        green: '#78c551',
        grey: '#9F9F9F',
        lightgrey: '#D9D9D9',
        opacityGrey: 'rgba(217, 217, 217, 0.25)',
        dark: '#0F1013',
        opacityDark: '#0F101380',
      },
      keyframes: {
        nowPlaying: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        stretch: {
          '0%': { strokeDasharray: '0, 150', strokeDashoffset: 0 },
          '50%': { strokeDasharray: '75, 150', strokeDashoffset: -25 },
          '100%': { strokeDashoffset: -100 },
        },
      },
      animation: {
        nowPlaying: 'nowPlaying 4s linear infinite',
        rotate: 'rotate var(--spinner-speed) linear infinite',
        stretch:
          'stretch calc(var(--spinner-speed) * 0.75) ease-in-out infinite',
      },
      boxShadow: {
        DEFAULT: '5px 5px',
      },
    },
  },
}
