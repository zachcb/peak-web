// http://eslint.org/docs/user-guide/configuring

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },

  root: true,

  env: {
    browser: true,
    jasmine: true,
    jest: true
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],

  plugins: ["react", "@typescript-eslint", "prettier"],

  rules: {
    // "import/no-extraneous-dependencies": 0,
    // "react/forbid-prop-types": 0,
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // semi: ["error", "always"],
    // "jsx-quotes": ["error", "prefer-double"],
    // quotes: ["error", "double"],
    // "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, {
      "extensions": [
        ".jsx",
        ".tsx"
      ]
    }],
    "prettier/prettier": ["error", { "singleQuote": true }],
    '@typescript-eslint/interface-name-prefix': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    '@typescript-eslint/member-delimiter-style': [2, {
      multiline: {
          delimiter: "semi",
          requireLast: true
      },
      singleline: {
          delimiter: "semi",
          requireLast: false
      }
    }],
  },

  settings: {
    "import/resolver": {
      "node": {
        "paths": ["./"]
      }
    },
    react: {
      pragma: "React",
      version: "detect",
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
