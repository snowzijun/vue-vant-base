import axios from 'axios'
import qs from 'qs'
let mockMatch = undefined
// 正式环境不需要使用mock
if (process.env.NODE_ENV === 'development') {
  mockMatch = require('@/mock').default
}

const baseURL = process.env.VUE_BASE_API

// mock请求代理
const mockURL = process.env.VUE_APP_MOCK_URL

const instance = axios.create({
  baseURL,
  // 超时时间 16 秒
  timeout: 16000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 请求拦截器 添加token， 判断登录之类操作
instance.interceptors.request.use(
  config => {
    if (process.env.NODE_ENV === 'development') {
      const url = config.url
      if (mockMatch(url)) {
        config.baseURL = mockURL
      }
    }
    // 在这里做认证，可以从store里面获取token
    // config.headers['Authorization'] = `Bearer ${store.getters.getAccessToken}`

    // 如果get  请求有缓存，可以加这段代码
    if (config.method === 'get') {
      const now = `${Date.now()}`
      if (config.params) {
        config.params[now] = now
      } else {
        const hasParams = config.url.includes('?')
        config.url = config.url + (hasParams ? '&' : '?') + `${now}=${now}`
      }
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器，对返回数据进行预处理
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
/**
 * 对 请求进行封装 只有 status 与 code 都是200 才会进入 then , 否则均进入 catch
 * @param {*} options
 */
const request = (options = {}) => {
  return new Promise((resolve, reject) => {
    instance(options)
      .then(({ data, status, statusText }) => {
        if (status === 200) {
          resolve(data)
        } else {
          reject(statusText)
        }
      })
      .catch(result => {
        if (!result || !result.response) {
          reject(result)
        }
        const {
          response: { status, statusText, data = {} }
        } = result
        switch (status) {
          // 未登录
          case 401:
            sessionStorage.clear()
            reject('您还未登录')
            break
          case 403:
            reject('登录失效')
            break
          case 404:
            reject('访问异常，请联系系统管理员')
            // 请求丢失
            break
          default:
            reject(data.message || statusText)
            break
        }
      })
  })
}

const get = (url, params = {}) => {
  return request({
    url,
    method: 'get',
    params
  })
}

const put = (url, data = {}) => {
  return request({
    url,
    method: 'put',
    data
  })
}

const post = (url, data = {}) => {
  return request({
    url,
    method: 'post',
    data
  })
}
const postForm = (url, data = {}) => {
  return request({
    url,
    method: 'post',
    data: qs.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  })
}

const del = (url, data = {}) => {
  return request({
    url,
    method: 'delete',
    data
  })
}
// 将获取cancelToken的方法绑定到每个方法上面，方便调用的时候使用
;[request, get, post, postForm, put, del, instance].forEach(item => {
  item.getCancelToken = () => {
    return axios.CancelToken
  }
})

/**
 * request 对请求进行二次包装，处理了异常编码
 * get
 * set
 * axios 对axios进行包装之后的原生实例
 */
export { request, get, post, postForm, put, del, instance as axios, baseURL }
