/*
 * @Description: In User Settings Edit
 * @FilePath: \vue-base\vue.config.js
 */
const path = require('path')
const webpackConfig = require('./config/webpack.config.js')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

// 开发模式代理地址 TODO: 按需修改
const DEV_URL = 'http://127.0.0.1'

const MOCK_URL =
  'https://www.fastmock.site/mock/52683c53c56c5c59bc1e46d24a3550b6/zijun'

module.exports = {
  configureWebpack: config => {
    if (isProd) {
      // 配置webpack 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      )
    }
  },
  chainWebpack: config => {
    // 项目标题
    config.plugin('html').tap(args => {
      args[0].title = process.env.VUE_APP_TITLE
      return args
    })
    webpackConfig(config)
  },
  // 不需要生产环境的 source map
  productionSourceMap: false,
  publicPath: !isProd ? '/' : '',
  css: {
    // 是否将css 提取到独立的文件,生产环境提取，开发环境不提取
    extract: !!isProd,
    // 开发模式开启css sourcemap
    sourceMap: !isProd,
    loaderOptions: {
      less: {
        lessOptions: {}
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/style/mixin/*.less'),
        path.resolve(__dirname, './src/style/variables/*.less')
      ]
    }
  },
  devServer: {
    port: 12315,
    proxy: {
      '^/api': {
        target: DEV_URL,
        changeOrigin: false,
        pathRewrite: {
          '^/api': ''
        }
      },
      '^/mock/': {
        // TODO: 添加 mock地址
        // mock模式代理地址,为了方便演示，这里使用了fastmock线上服务，建议使用yapi,可以搭建私服， TODO: 按需修改
        target: MOCK_URL,
        changeOrigin: false,
        pathRewrite: {
          '^/mock': ''
        }
      }
    }
  }
}
