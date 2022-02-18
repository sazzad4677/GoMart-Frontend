module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
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
        "dashboard-bg": {
          DEFAULT: "#f9fafb",
        },
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
  plugins: [require("kutty")],
};
