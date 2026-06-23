/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				neonLime: "#BFFF00",
				neonIndigo: "#6366F1",
				neonCoral: "#F97316",
				cardDark: "#0D0D12",
				obsidian: "#050508",
			},
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
				jakarta: ["Plus Jakarta Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
