/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: '#4FB9D0',
				dark: '#3E3E3E',
				red: '#D04F4F',
				green: '#5DD05A',
				grey: '#9F9F9F',
				lightgrey: '#D9D9D9',
				'25grey': 'rgba(217, 217, 217, 0.25)',
				'c-bg': '#0F1013',
				'c-box': 'var(--box-background)',
				'c-gray': 'var(--gray)',
				'c-red': 'var(--red)',
			},
			keyframes: {
				buttonTouched: {
					'0%, 100%': { transform: 'translate3d(0, 0, 0)' },
					'50%': { transform: 'translate3d(-3px, 3px, 0))' },
				},
			},
			animation: {
				touch: 'buttonTouched 200ms ease-in-out',
			}
		},
	},
	plugins: [],
}
