/*
 * @Description: mock接口主入口文件
 * @FilePath: \vue-base\src\mock\index.js
 */

/**
 * 对于mock数据，作者一般喜欢使用yapi接口平台
 * 如果某个接口需要使用mock，在modules里面添加接口地址即可，否则走真实接口，这样可以有效的切换
 * 单个接口的数据来源
 *
 * mock服务器地址见vue.config.js文件
 */
const mockPaths = []

// 动态读取modules下面的文件，添加到路由中,防止多人修改文件导致代码冲突
const files = require.context('./modules', false, /\.js$/)
files.keys().forEach(key => {
  const file = files(key).default
  mockPaths.push(...file)
})

// 对特殊url进行正则解析
const parser = () => {
  return mockPaths.map(path => {
    const reg = /(\{\w+\})/g
    if (reg.test(path)) {
      const newPath = path.replace(/\//g, '\\/').replace(reg, '(\\w+)')
      const regexp = new RegExp(`^${newPath}$`)

      return {
        regexp: regexp,
        reg: true
      }
    }
    return {
      path,
      reg: false
    }
  })
}

const paths = parser()

/**
 * 判断当前路径是否在mockPath中
 */
export default path => {
  return paths.some(pt => {
    if (pt.reg) {
      return pt.regexp.test(path)
    }
    return pt.path === path
  })
}
