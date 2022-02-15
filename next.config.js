const withCSS = require('@zeit/next-css')

const config = withCSS()

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {
  ...config,
  basePath: urlPrefix,
  assetPrefix: urlPrefix,
  trailingSlash: true,
}
