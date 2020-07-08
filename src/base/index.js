import ZjLoading from './zj-loading'
// 扫描所有的组件
const files = require.context('./', true, /^\.\/[\w-_]+\/index\.(js|vue)$/)

const components = files.keys().map(key => {
  return files(key).default
})

export default {
  install(Vue) {
    components.forEach(component => {
      if (component.name) {
        Vue.component(component.name, component)
      }
    })
    Vue.use(ZjLoading, {})
  }
}
