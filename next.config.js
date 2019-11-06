const withCSS = require('@zeit/next-css')
const path = require('path');

module.exports = withCSS({
  cssModules: true,
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})
