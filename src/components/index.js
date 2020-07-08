/*
 * @Author: 子君
 * @Date: 2020-06-16 11:23:20
 * @LastEditors: 子君
 * @LastEditTime: 2020-06-16 14:54:04
 * @Description: 文件说明
 * @FilePath: \glink-eai-portal-mobile\src\components\index.js
 */

// 扫描所有的组件
const files = require.context('./', true, /^\.\/[\w-_]+\/index\.(js|vue)$/)

const components = files.keys().map(key => {
  return files(key).default
})

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
