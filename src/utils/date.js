import dayjs from 'dayjs'

/** **通用常量****/

// 日期时间
export const DATE_TIME_FMT = 'YYYY-MM-DD HH:mm:ss'

// 日期时间，不包含秒
export const DATE_TIME_MINUTE_FMT = 'YYYY-MM-DD HH:mm'

// 日期
export const DATE_FMT = 'YYYY-MM-DD'

/**
 * 获取当前时间戳
 */
export const now = () => Date.now()

const isNumber = num => typeof num === 'number'

const getDate = date => {
  if (isNumber(date)) {
    return dayjs(date)
  }
  return dayjs(date, DATE_TIME_FMT)
}

/**
 * 格式化日期
 * @param {string, number} date
 * @param {*} fmt
 */
export const format = (date, fmt = DATE_FMT) => {
  if (!date) {
    return date
  }
  return getDate(date).format(fmt)
}

/**
 * 获取日期时间戳
 * @param {*} date
 */
export const getTimestamp = date => {
  if (isNumber(date)) {
    return date
  }
  return getDate(date).valueOf()
}

/**
 * 获取秒 如果不传值获取当前秒值
 * @param {*} date
 */
export const getSecond = (date = Date.now()) => getDate(date).second()

/**
 * 获取分钟, 如果不传值获取当前分钟值
 * @param {*} date
 */
export const getMinute = (date = Date.now()) => getDate(date).minute()

/**
 *  获取小时, 如果不传值获取当前分钟值
 * @param {*} date
 */
export const getHour = (date = Date.now()) => getDate(date).hour()

/**
 * 获取当前是本月第几天
 * @param {*} date
 */
export const getDay = (date = Date.now()) => getDate(date).date()

/**
 * 获取当前月份
 * @param {*} date
 */
export const getMonth = (date = Date.now()) => getDate(date).month() + 1

/**
 * 获取当前年份
 * @param {*} date
 */
export const getYear = (date = Date.now()) => getDate(date).year()

/**
 * 用于表格格式化单元格
 * @param {*} row
 * @param {*} column
 * @param {*} cellValue
 */
export const formatCell = (fmt = 'YYYY-MM-DD') => {
  return (row, column, cellValue) => {
    return format(cellValue, fmt)
  }
}

/**
 * 获取当前属于本周周几
 * @param {*} date
 */
export const getWeekDay = (date = Date.now()) => getDate(date).day()

/**
 * 获取中文星期几
 * @param {*} date
 * @param {*} prefix
 */
export const getWeekDayChinese = (date = Date.now(), prefix = '星期') => {
  const weekday = getWeekDay(date)
  return prefix + ['日', '一', '二', '三', '四', '五', '六'][weekday]
}
