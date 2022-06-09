export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // lintOnSave: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Project One - Degen NFTs",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "100 Exclusive NFTs living on the Ethereum blockchain",
      },
      {
        property: "og:image",
        content: "@/assets/images/a_banner_fox.png" || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  buildDir: "dist",
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["nuxt-purgecss", "@nuxtjs/style-resources"],

  purgeCSS: {
    whiteList: () => ["dark-mode"],
  },

  css: ["./assets/css/fonts.css", "./assets/css/theme.css"],

  styleResources: {
    // sass: [],
    scss: ["./assets/scss/main.scss"],
    // less: [],
    // stylus: [],
    // hoistUseStatements: true // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios",
    "nuxt-i18n",
    "@nuxtjs/color-mode", //only necassary if color templates are included
  ],
  plugins: ["~/plugins/moralis.js"],

  axios: {
    browserBaseURL: "",
  },

  i18n: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const svgRule = config.module.rules.find((rule) =>
        rule.test.test(".svg")
      );

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"],
      });
    },
  },
};
