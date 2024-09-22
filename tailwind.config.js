/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rise: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomRotate: {
          "0%": {
            transform: "scale(0) rotate(0deg)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(1) rotate(360deg)",
            opacity: 1,
          },
        },
        fall: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.5s ease-out forwards",
        zoomRotate: "zoomRotate 0.5s ease-in-out forwards",
        fall: "fall 0.5s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};
