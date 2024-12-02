/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGradientStart: "#333436",
        customGradientEnd: "#181818",
      },
    },
  },
  plugins: [],
};
