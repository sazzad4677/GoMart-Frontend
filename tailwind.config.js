module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      inner: "inset 2px 2px 4px 2px rgba(0, 0, 0, 0.06)", // white button inner shadow
    },
    extend: {
      colors: {
        //color based on 60-30-10 technique
        "green-pantone": "#40AA54", //primary background color
        honeydew: "#F2FFF5", //secondary background color
        "ocean-green": "#4BC49C", //accent color
        "kombu-green": "#2F3B34", // primary text color
        "dim-gray": "#6D6A6A", // secondary text color
        "cultured-white": "#f7f7f7", // background => used for white button background
        "may-green": "#459B54", //deep green => hover color
        white: "#ffffff", // text color for green background
        dimWhite: "#e8eaf6",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
      scale: ["active", "group-hover"],
      brightness: ["hover", "focus"],
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "active"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    transform: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("daisyui")],
};
