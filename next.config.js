const withCSS = require('@zeit/next-css')

const config = withCSS()

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {
  ...config,
  basePath: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
}
