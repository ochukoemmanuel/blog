module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bookmark-purple': '#5267DF',
        'blog-red': '#F52B4F',
        'bookmark-blue': '#242A45',
        'bookmark-grey': '#9194A2',
        'blog-darkgrey': '#E5E5E5',
        'blog-lightgrey': '#CFCFCF',
        'blog-black': '#1D2025',
        'bookmark-white': '#FFFFFF',
      },
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      screens: {
        lg: '1124px',
        xl: '1200px',
        '2xl': '1124px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
