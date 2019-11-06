// http://eslint.org/docs/user-guide/configuring

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },

  root: true,

  env: {
    node: true,
    browser: true,
    es6: true
  },

  parser: "babel-eslint",

  extends: [
    "airbnb",
    // "eslint:recommended",
    // "plugin:react/recommended"
  ],

  rules: {
    "import/no-extraneous-dependencies": 0,
    "react/forbid-prop-types": 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: ["error", "always"],
    "jsx-quotes": ["error", "prefer-double"],
    quotes: ["error", "double"]
  },

  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["./"]
      }
    },
  },

  globals: {
    "document": true,
    "window": true,
    "process": true,
    "fetch": false,
    "ANALYTICS_TRACKING_ID": false,
    "AUTH0_CLIENT_ID": false,
    "AUTH0_DOMAIN": false,
    "GRAPHQL_ENDPOINT": false,
    "NEWSLETTER_FORM_ACTION": false,
    "NEWSLETTER_FORM_INPUT_NAME": false,
    "ON_PRODUCTION": true,
    "$Diff": true
  }
}
