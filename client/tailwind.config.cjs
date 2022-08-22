/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        default: "#242424",
        soft: "#2f2f2f",
        mute: "#3a3a3a",
      },

      textColor: {
        "dark-2": "rgba(235,235,235,.6)",
      },
      colors:{
        'primary':'#41d1ff'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
