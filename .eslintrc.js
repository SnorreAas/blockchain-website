module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", ("plugins": ["prettier"])],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1
      }
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: "always"
      }
    ]
  }
};
