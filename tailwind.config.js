function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: withOpacityValue("--color-base"),
        secondary: withOpacityValue("--color-base-secondary"),
        tertiary: withOpacityValue("--color-base-tertiary"),
      },
      textColor: {
        base: withOpacityValue("--color-base"),
        primary: withOpacityValue("--color-text"),
      },
      width: {
        720: "720px",
      },
    },
  },
  // plugins: [],
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "720px",
          },
          "@screen xl": {
            maxWidth: "720px",
          },
        },
      });
    },
  ],
};
