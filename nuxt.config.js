export default {
  head: {
    title: "currency-converter",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/main.css"],

  plugins: [],

  components: true,

  buildModules: ["@nuxt/postcss8"],

  modules: [
    "@nuxtjs/axios",
    "@/modules/calculator/index.js",
    "@/modules/rate/index.js",
  ],

  axios: {
    baseURL: process.env.API_URL,
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
