/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fffbf5",
          100: "#fff7ed",
          200: "#fce5cf",
          300: "#facfaf",
          400: "#f79d77",
          500: "#f2613f",
          600: "#db4f32",
          700: "#b53b22",
          800: "#912a17",
          900: "#6e1a0d",
          950: "#470d06",
          980: "#0C0C0C",
        },
      },
    },
    borderRadius: {
      md: "4px",
    },
  },
  plugins: [],
};
