module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFD3B2',
          200: '#E3AC85',
          300: '#BA7848',
        },
        box: '#FFD68A',
        select: '#FF8730',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
