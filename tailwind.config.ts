import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	daisyui: {
		themes: ["acid", "night", "cupcake", "fantasy", "winter", "corporate", "lofi"],
	},
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"text-gradient": "linear-gradient(90deg, #6E0076 0%, #0073C1 100%)",
				"bg-gradient": "linear-gradient(45deg, #6E0076, #0073C1)",
			},
		},
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
