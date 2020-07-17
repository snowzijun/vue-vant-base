/*
 * @Author: 子君
 * @Date: 2020-07-14 13:42:14
 * @LastEditors: 子君
 * @LastEditTime: 2020-07-14 18:04:40
 * @Description: 函数节流
 * @FilePath: \vue-base\src\decorator\throttle.js
 */

import { throttle } from 'lodash'

/**
 * 函数节流装饰器
 * @param {number} wait 节流的毫秒
 * @param {Object} options 节流选项对象
 * [options.leading=true] (boolean): 指定调用在节流开始前。
 * [options.trailing=true] (boolean): 指定调用在节流结束后。
 */
export default function(wait, options = {}) {
  return function(target, name, descriptor) {
    descriptor.value = throttle(descriptor.value, wait, options)
  }
}
