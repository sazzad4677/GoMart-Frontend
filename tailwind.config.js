module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Nunito", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        red: {
          light: '#f3e9ea',
          dark: '#BD2E0F', //hover
          DEFAULT: '#E53935'
        },
        gray: {
          DEFAULT: '#2F3B34'
        }
      },
      
    },
  },
  variants: {
      textColor: ['responsive','hover', 'focus','active'],
  },
  
  plugins: [require("kutty")],
}
