module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0px 8px 25px rgba(0, 0, 0, 0.07)",
      "4xl": "0px 8px 25px rgba(0, 0, 0, 0.04)",
      outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
      inner: "inset 2px 2px 4px 2px rgba(0, 0, 0, 0.06)",
    },
    extend: {
      backgroundColor: {
        skin: {
          primary: ({ opacityValue }) =>
            `rgba(var(--primary-color), ${opacityValue || 1} )`,
          secondary: ({ opacityValue }) =>
            `rgba(var(--secondary-color), ${opacityValue || 1} )`,
          accent: ({ opacityValue }) =>
            `rgba(var(--accent-color), ${opacityValue || 1} )`,
          optional: ({ opacityValue }) =>
            `rgba(var(--options-color), ${opacityValue || 1} )`,
          inverted: ({ opacityValue }) =>
            `rgba(var(--inverted-color), ${opacityValue || 1} )`,
          "scheme-color": ({ opacityValue }) =>
            `rgba(var(--scheme-based-bg-color), ${opacityValue || 1} )`,
          "primary-hover": "var(--primary-hover-color)",
          "secondary-hover": "var(--secondary-hover-color)",
        },
      },
      textColor: {
        skin: {
          primary: "var(--primary-text-color)",
          secondary: "var(--secondary-text-color)",
          accent: "var(--accent-text-color)",
          base: "var(--base-text-color)", // primary color of the site
          "primary-btn": "var(--btn-text-primary)",
          "secondary-btn": "var(--btn-text-secondary)",
          "label-text-1": "var(--label-text-color-1)",
          "label-text-2": "var(--label-text-color-2)",
        },
      },
      borderColor: {
        skin: {
          primary: "var(--primary-border-color)",
          base: "var(--base-border-color)",
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        green: {
          light: ({ opacityValue }) =>
            `rgba(var(--primary-color), ${opacityValue || 1} )`,
          DEFAULT: ({ opacityValue }) =>
            `rgba(var(--primary-color), ${opacityValue || 1} )`,
        },
        red: {
          DEFAULT: "#EF4444",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        "dashboard-bg":{
          DEFAULT: "#f9fafb"
        }
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
      width: {
        90: "22.5rem",
        98: "28rem",
      },
      maxWidth: {
        "9xl": "90rem",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "active"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    transform: ["responsive", "hover", "focus", "active", "group-hover"],
    animation: ["hover", "focus"],
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [require("kutty")],
};
