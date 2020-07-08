/**
 * 本系统接口mock 使用的是 yapi, 在 modules 里面写的接口会走yapi, 否则会走真实接口
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
