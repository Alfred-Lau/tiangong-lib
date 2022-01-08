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
 * - 不能使用 typeof 的原因： 因为是 对于 数组，对象，null，都是返回 object
 * - arr.toString 和 Object.prototype.toString.call 的区别: Array.prototype.toString 重写了 Object.prototype.toString 所以返回了 拼接起来的字符串
 */
