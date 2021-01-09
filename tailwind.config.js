module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    maxWidth: {
      xl: "1280px",
      "1/7": "14%",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      64: "16rem",
    },
    extend: {
      spacing: {
        "4px": "4px",
        "8px": "8px",
        "16px": "16px",
        "32px": "32px",
        "64px": "64px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["first"],
    },
  },
  plugins: [],
};
