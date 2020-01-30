// http://eslint.org/docs/user-guide/configuring

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },

  root: true,

  env: {
    es6: true,
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
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },

  extends: [
    // 'airbnb',
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],

  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
  ],

  rules: {
    "import/no-extraneous-dependencies": [2, { "packageDir": "./" }],
    "react/jsx-filename-extension": [1, {
      "extensions": [".jsx", ".tsx"]
    }],
    "react/destructuring-assignment": 0,
    "react/static-property-placement": 0,
    "react/state-in-constructor": 0,
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [1,
      {
          'maximum': 1
      }
    ],
    "quotes": [1, "double"],
    "@typescript-eslint/quotes": [1, "double"],
    "@typescript-eslint/interface-name-prefix": 2,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/member-delimiter-style": [2, {
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
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    "import/resolver": {
      "node": {
        "paths": ["./"]
      },
      typescript: {},
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
