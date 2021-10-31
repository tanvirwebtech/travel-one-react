module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greenblue: {
          DEFAULT: "#55efc4",
          dark: "#00b894",
        },
        navyblue: {
          DEFAULT: "#130f40",
        },
        customGrey: {
          DEFAULT: "#636e72",
          light: "#b2bec3",
          dark: "#2d3436",
        },
        whiteTransparent: {
          DEFAULT: "#fffffff50",
          dark: "#ffffff20",
          light: "#ffffff70",
        },
        blackTransparent: {
          DEFAULT: "#00000050",
          20: "#00000020",
          70: "#00000070",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
