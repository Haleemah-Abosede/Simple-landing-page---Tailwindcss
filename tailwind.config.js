/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0",
          },
          "20%": {
            width: "20%",
          },
          "40%": {
            width: "40%",
          },
          "60%": {
            width: "60%",
          },
          "80%": {
            width: "80%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        typing: "typing 6s steps(12) infinite",
      },
    },
  },
  plugins: [],
};
