/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				"button-gradient":
					"linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
				"button-gradient-hover":
					"linear-gradient(83.21deg, #4355ff 0%, #c962ee 100%)",
			},
		},
	},
	plugins: [],
};
