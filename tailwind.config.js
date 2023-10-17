/** @type {import('tailwindcss').Config} */
/** @type {import('rippleui').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  rippleui: {
		defaultStyle: false,
	},
  rippleui: {
		removeThemes: ["dark"],
	},
  plugins: [require("rippleui")],
}

