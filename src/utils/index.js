/*
 * @Description: 文件说明
 * @FilePath: \vue-base\src\utils\index.js
 */

/**
 * 获得url中请求的参数
 * @return {}
 */
export function getQueryParams() {
  const query = window.location.search.substring(1)
  const arr = query.split('&')
  const params = {}
  for (let i = 0; i < arr.length; i += 1) {
    const pair = arr[i].split('=')
    params[pair[0]] = pair[1]
  }
  return params
}
export function test(str) {
  return str
}
