/*
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
