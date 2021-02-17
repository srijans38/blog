module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        img: '8px 8px 13px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        header: 'rgba(255, 255, 255, 0.75)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      translate: ['group-hover'],
      outline: ['active'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
