// 记录所有cdn的路径，生产环境使用，可根据生产环境不同切换不同的cdn数据源
module.exports = {
  // 是否启用CDN
  enable: true,
  JS: {
    vue: {
      url: 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js',
      exportName: 'Vue'
    },
    vuex: {
      url: 'https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js',
      exportName: 'Vuex'
    },
    'vue-router': {
      url: 'https://cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.min.js',
      exportName: 'VueRouter'
    },
    axios: {
      url: 'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js',
      exportName: 'axios'
    },
    lodash: {
      url: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
      exportName: '_'
    }
  },
  CSS: {}
}
