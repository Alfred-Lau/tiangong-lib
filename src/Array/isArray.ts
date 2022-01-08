export function isArray_v1(arr: any): arr is Array<unknown> {
  // 和直接调用 arr.toString()  的区别
  return Object.prototype.toString.call(arr) === "[object Array]";
}

export function isArray_v2(arr: any): arr is Array<unknown> {
  return arr instanceof Array;
}

export function isArray_v3(arr: any): arr is Array<unknown> {
  return arr.constructor === Array;
}

export function isArray_v4(arr: any): arr is Array<unknown> {
  return Array.isArray(arr);
}

/**
 * 不能使用 typeof 的原因： 因为是 object
 */
