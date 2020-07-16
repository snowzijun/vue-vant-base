/*
 * @Author: 子君
 * @Date: 2020-07-14 13:37:25
 * @LastEditors: 子君
 * @LastEditTime: 2020-07-14 13:45:24
 * @Description: 函数防抖
 * @FilePath: \vue-base\src\decorator\debounce.js
 */

import { debounce } from 'lodash'

/**
 * 函数防抖装饰器
 * @param {number} wait 需要延迟的毫秒数。
 * @param {Object} options 选项对象
 * [options.leading=false] (boolean): 指定在延迟开始前调用。
 * [options.maxWait] (number): 设置 func 允许被延迟的最大值。
 * [options.trailing=true] (boolean): 指定在延迟结束后调用。
 */
export default function(wait, options = {}) {
  return function(target, name, descriptor) {
    descriptor.value = debounce(descriptor.value, wait, options)
  }
}
