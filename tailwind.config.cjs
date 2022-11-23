/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			"mobile-s": "320px",
			"mobile-m": "375px",
			"mobile-l": "425px",
			"tablet": "768px",
			"laptop": "1024px",
			"desktop": "1440px",
		},

		colors: {
			"white": "hsl(0, 0%, 100%)",
			"cyan-light": "hsl(196, 38%, 86%)",
			"green-neon-less": "hsl(150.7, 50.6%, 33.3%)",
			"green-neon": "hsl(150, 89%, 64%)",
			"green-neon-more": "hsl(151, 100%, 66%)",
			"blue-grayish": "hsl(217, 19%, 38%)",
			"blue-dark-grayish": "hsl(218, 20%, 24%)",
			"blue-dark-moderate": "hsl(228, 45%, 44%)",
			"blue-dark": "hsl(220, 22%, 16%)",
		},

		fontSize: {
			"footer": "11px",
			"advice": "12px",
			"quote-mobile": "23px",
			"quote-tablet": "28px",
		},

		extend: {
			backgroundImage: {
				'divider-tablet': "url('/src/images/pattern-divider-desktop.svg')",
				"divider-mobile": "url('/src/images/pattern-divider-mobile.svg')",
			},

			boxShadow: {
				"neon": '0 0 20px hsl(151, 100%, 66%)',
			}
		},
	},
	plugins: [],
}
