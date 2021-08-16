/*
 * @Description: 文件说明
 */

const prodPlugin = []
// 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn
if (process.env.NODE_ENV === 'production') {
  prodPlugin.push([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 让系统支持可选链
    '@babel/plugin-proposal-optional-chaining',
    // 配置 vant 按需加载
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ],
    ...prodPlugin
  ]
}
