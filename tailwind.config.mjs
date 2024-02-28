/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Roboto': ['Roboto', 'sans-serif'],
				'Montserrat': ['Montserrat', 'sans-serif'],
			},
			boxShadow: {
				'cover': '0 0 10px 0 rgba(0, 0, 0, 0.5)',
				'right': '3px 0px 5px 0px rgba(0,0,0,0.2);'
			},
			  gridTemplateColumns: {
				'14': 'repeat(14, minmax(0, 1fr))',
			}
		},
	},
	plugins: [],
}
