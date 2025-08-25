/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cura: {
          50: "#eef9f6",
          100: "#d5f1e8",
          200: "#abe3d2",
          300: "#7fd5bd",
          400: "#4fc6a6",
          500: "#2ab891",
          600: "#1b9b79",
          700: "#167b62",
          800: "#145f4f",
          900: "#124e42"
        }
      }
    }
  },
  plugins: []
}