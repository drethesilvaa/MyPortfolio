/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        opacWhite: "#fcfcfc",
      },
      backgroundImage: {
        "japan-hero":
          "linear-gradient(63deg,rgba(247, 247, 247, 1) 60%, rgba(255, 246, 209, 1) 100%)",
      },
    },
  },
  plugins: [],
  important: true,
};
