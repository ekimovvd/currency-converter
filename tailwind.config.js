module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./modules/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: { min: "360px", max: "768px" },
        md: { min: "768px", max: "1280px" },
        xl: { min: "1280px", max: "1600px" },
      },
      container: {
        "max-width": {
          DEFAULT: "90%",
          xs: "90%",
          md: "90%",
          xl: "90%",
        },
        "min-width": {
          DEFAULT: "90%",
          xs: "90%",
          md: "90%",
          xl: "90%",
        },
      },
    },
  },
};
