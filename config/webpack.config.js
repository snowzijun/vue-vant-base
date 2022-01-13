const path = require('path')

const resolve = dir => path.resolve(__dirname, '../', dir)

module.exports = config => {
  // 通用配置
  // 设置路径别名
  config.resolve.alias.set('@', resolve('./src'))

  // 根据环境不同，执行不同的配置
  if (process.env.NODE_ENV === 'production') {
    require('./webpack.config.prod.js')(config)
  } else {
    require('./webpack.config.dev.js')(config)
  }
}
