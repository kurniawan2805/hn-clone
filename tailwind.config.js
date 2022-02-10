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
      colors: {
        primary: withOpacityValue("--color-base"),
        secondary: withOpacityValue("--color-base-secondary"),
        tertiary: withOpacityValue("--color-base-tertiary"),
        "text-color": withOpacityValue("--color-text"),
        "gray-lgt": "#F4F7FA",
        "card-primary": "#E0E8F3",
        // background: rgb(244, 247, 250),
      },
      textColor: {
        "base-primary": withOpacityValue("--color-base"),
        primary: withOpacityValue("--color-text"),
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
