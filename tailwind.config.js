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
      colors: {
        //color based on 60-30-10 technique
        "primary-color": "#40AA54",
        "secondary-color": "#F2FFF5",
        "accent-color": "#4BC49C",
        gray: {
          DEFAULT: "#2F3B34",
          light: "#6D6A6A",
          lightest: "#f7f7f7",
          dark: "#424242",
        },
      },
      scale: ["active", "group-hover"],
      spacing: {
        128: "32rem",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("kutty")],
};
