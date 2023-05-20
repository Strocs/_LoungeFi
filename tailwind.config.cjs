/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: '#4FB9D0',
				darkgrey: '#3E3E3E',
				red: '#D04F4F',
				green: '#5DD05A',
				grey: '#9F9F9F',
				lightgrey: '#D9D9D9',
				opacitygrey: 'rgba(217, 217, 217, 0.25)',
				dark: '#0F1013',
				opacitydark: '#00000080',
			},
			keyframes: {
				nowPlaying: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(100%)' },
				},
			},
			animation: {
				nowPlaying: 'nowPlaying 4s linear infinite',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
}
