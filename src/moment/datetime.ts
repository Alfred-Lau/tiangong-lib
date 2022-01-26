/**
 * 检测给出的日期是否有效
 * @param val
 */
export function isValidDate(val) {
  return !Number.isNaN(new Date(val).valueOf());
}

/**
 *  计算两个日期之间的间隔【默认间隔单位使用 日】
 * @param left
 * @param right
 */
export function dayDiff(left, right) {
  return Math.ceil(Math.abs(left.getTime() - right.getTime()) / 86400000);
}

/**
 * 查找日期位于一年中的第几天:用于检测给出的日期位于今年的第几天：
 * @param date
 */
export function dayOfYear(date) {
  return Math.floor(
    (date - +new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
}

/**
 * 用于将时间转化为hour:minutes:seconds的格式：
 * @param date
 */
export function timeFromDate(date) {
  return date.toTimeString().slice(0, 8);
}
// 返回当前时间 09:00:00

console.log("isDateValid", isValidDate("December 17, 1995 25:24:00"));
console.log("dayDiff", dayDiff(new Date("2021-11-3"), new Date("2022-2-1")));
console.log("dayOfYear", dayOfYear(new Date()));
console.log("dayOfYear", timeFromDate(new Date()));
console.log("dayOfYear", timeFromDate(new Date(2021, 11, 2, 12, 30, 0)));
