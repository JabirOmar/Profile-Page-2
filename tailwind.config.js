/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: "768px",
      md: "425px",
      sm: '0px'
    }
  },
  plugins: [],
}

