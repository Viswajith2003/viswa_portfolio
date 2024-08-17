// tailwind.config.js
module.exports = {
  // darkMode: 'class', // Enables dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0,0,0,1) 2px, #ffffff 6px, #ffffff 100px);",
      },
    },
  },
  plugins: [],
};
