/*
 * @Description: 发送请求
 * @FilePath: \vue-base\src\api\home.js
 */

import { get } from '@/utils/request'

export const getDemoData = (data = {}) => {
  return get('home/demo/api', data)
}
