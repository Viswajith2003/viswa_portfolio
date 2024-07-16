/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,1) 2px, #ffffff 6px, #ffffff 100px);",
      },
    },
  },
  plugins: [],
};
