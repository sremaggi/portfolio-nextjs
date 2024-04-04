/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'dark-gradient': 'linear-gradient(to bottom, rgb(58, 58, 60), rgb(99, 99, 102))',

          
      },
      backgroundColor:{
        'custom-gray': '#636363',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'], // Añade 'roboto' como una clave para tu fuente personalizada
      },
    },
  },
  plugins: [],
};
