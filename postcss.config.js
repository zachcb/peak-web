const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNested = require("postcss-nested");

module.exports = {
  plugins: [
    tailwindcss,
    postcssPresetEnv,
    postcssNested,
  ],
};
