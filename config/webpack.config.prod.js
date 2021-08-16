const cdn = require('./cdn')

module.exports = config => {
  config
    .plugin('webpack-bundle-analyzer')
    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  // 如果启用了cdn,则添加cdn内容
  if (cdn.enable) {
    config.plugin('html').tap(args => {
      args.forEach(arg => {
        arg.cdns = {
          JS: Object.values(cdn.JS).map(item => {
            return typeof item === 'string' ? item : item.url
          }),
          CSS: Object.values(cdn.CSS)
        }
      })
      return args
    })

    config.externals(
      Object.entries(cdn.JS).reduce((result, [key, value]) => {
        result[key] = typeof value === 'string' ? key : value.exportName
        return result
      }, {})
    )
  }
}
