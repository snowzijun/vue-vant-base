/*
 * @Description: 文件说明
 * @FilePath: \glink-eai-portal-mobile\src\base\gld-loading\index.js
 */
import Vue from 'vue'

import Loading from './loading.vue'

let loadingInstance = undefined

const LoadingContructor = Vue.extend(Loading)

LoadingContructor.prototype.close = function () {
  setTimeout(() => {
    loadingInstance.loading = false
  })
}

function loading() {
  if (loadingInstance) {
    loadingInstance.loading = true
    return loadingInstance
  }
  loadingInstance = new LoadingContructor({
    el: document.createElement('div'),
    data: {}
  })
  document.body.appendChild(loadingInstance.$el)
  Vue.nextTick(() => {
    loadingInstance.loading = true
  })
  return loadingInstance
}

export default {
  install() {
    Vue.prototype.$loading = loading
  },
  service: loading
}
