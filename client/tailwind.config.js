/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarbottomline: {
          200: "#e5e5e5",
        },
        appListColor: {
          400: "#ff7a3d",
        },
      },
    },
  },
  plugins: [],
};
