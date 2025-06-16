/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jamjuree: ["Bai Jamjuree", "sans-serif"],
      },
      backgroundImage: {
        "login-gradient":
          "linear-gradient(180deg, #E3325C 10%, rgba(33, 150, 243, 0) 100%)",
        "fa-primary": "#e3325c",
        "surface-ground": "#f9fafb",
      },
      // background:{
      //   'bg-login':'linear-gradient(180deg, var(#E3325C) 10%, rgba(33, 150, 243, 0) 100%)'
      // },
      colors: {
        "primary-red": "#E3325C",
        "primary-blue": "#2196F3",
        "fa-primary": "#e3325c",
      },
    },
  },
  plugins: [],
};
