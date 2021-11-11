module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      inner: "inset 2px 2px 4px 2px rgba(0, 0, 0, 0.06)",
    },
    extend: {
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "12xl": "25rem",
      },
      colors: {
        red: {
          light: "#FFF5F6",
          dark: "#BD2E0F", //hover
          DEFAULT: "#F96062",
        },
        gray: {
          DEFAULT: "#2F3B34",
          light: "#6D6A6A",
          lightest: "#f7f7f7",
          dark: "#424242",
        },
      },
      outline: {
        red: "2px solid #F96062",
      },
      scale: ["active", "group-hover"],
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("kutty")],
};
