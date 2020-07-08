/*
 * @Author: 子君
 * @Date: 2020-06-15 10:34:38
 * @LastEditors: 子君
 * @LastEditTime: 2020-06-15 14:06:18
 * @Description: 文件说明
 * @FilePath: \glink-eai-portal-mobile\babel.config.js
 */

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 可选链
    '@babel/plugin-proposal-optional-chaining',
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
}
