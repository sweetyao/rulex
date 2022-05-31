import dayjs from 'dayjs';


/**
 * 转义时间
 * @param {(string|number)} time
 * @param {string} timeFormat
 * @returns {string}
 */
export function renderTime(time, timeFormat='YYYY-MM-DD HH:mm:ss'){
  return dayjs(time).format(timeFormat)
}
