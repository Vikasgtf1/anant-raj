/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
        lg: "1280px",
      },
      colors: {
        primaryred: "#B3162F",
        primaryblue: "#263A7F",
      },
    },
  },
  plugins: [],
};
