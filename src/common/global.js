/*
 * 定义全局变量
 * 此文件里的的全局变量均注册到window全局对象下
 */

export const addToken = (name, value, expireHours) => {
  let cookieString = name + '=' + escape(value) + '; path=/'
  // 判断是否设置过期时间
  if (expireHours > 0) {
    let date = new Date()
    date.setTime(date.getTime() + expireHours * 3600 * 1000)
    cookieString = cookieString + ';expires=' + date.toGMTString()
  }

  document.cookie = cookieString
}

export const getToken = name => {
  let strcookie = document.cookie
  let arrcookie = strcookie.split('; ')
  for (let i = 0; i < arrcookie.length; i++) {
    let arr = arrcookie[i].split('=')
    if (arr[0] === name) {
      return unescape(arr[1])
    }
  }
  return null
}
