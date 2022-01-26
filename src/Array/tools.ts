/**
 * 判断数组不空
 * @param array
 */
export function isNotEmptyArray(array: any[]) {
  return Array.isArray(array) && array.length > 0;
}

/**
 * 合并两个数组
 * @param arr01
 * @param arr02
 */
export function mergeTwoArray(arr01, arr02) {
  return [...arr02, ...arr02];
}

export function mergeTwoArray_v2(arr01, arr02) {
  return arr01.concat(arr02);
}
