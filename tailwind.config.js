/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_main: "#e6efff",
        blue_secondary: "#033860",
        blue_third: "#c2ddf1",
      },
    },
  },
  plugins: [require("daisyui")],
}

