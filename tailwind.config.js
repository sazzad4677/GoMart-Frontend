module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          light: '#f3e9ea',
          primary: '#BA4B45',
          dark: '#BD2E0F' // hover
        },
        gray: {
          primary: '#2F3B34'
        }
      },
      
    },
  },
  variants: {
      textColor: ['responsive','hover', 'focus','active'],
  },
  
  plugins: [require("kutty")],
}
