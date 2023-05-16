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
				grey: '#707070',
				lightgrey: '#D9D9D9',
				'25grey': 'rgba(217, 217, 217, 0.25)',
				'c-bg': 'var(--main-background)',
				'c-box': 'var(--box-background)',
				'c-gray': 'var(--gray)',
				'c-red': 'var(--red)',
			},
		},
	},
	plugins: [],
}
