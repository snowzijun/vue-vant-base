/*
 * @Description: 发送请求
 * @FilePath: \vue-base\src\api\home.js
 */

import { get } from '@/utils/request'

export const getDemoData = (data = {}) => {
  return get('home/demo/api', data)
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       success: true,
  //       data: {
  //         name: '子君',
  //         公众号: '前端有的玩',
  //         掘金: '前端进击者'
  //       }
  //     })
  //   }, 2000)
  // })
}
