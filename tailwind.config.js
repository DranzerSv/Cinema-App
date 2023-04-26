/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontWeight: {
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      colors: {
        smoke: '#f5f5f5',
        steel: '#8c8c8c',
        fire: '#fe0000',
        crimson: '#c60a09',
      },
    },
  },
  plugins: [],
};
