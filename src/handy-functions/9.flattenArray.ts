/**
 * 数组扁平化 6 法
 *
 * - 扩展运算符
 * - reduce 函数迭代
 * - es6 的flat 方法
 * - 普通递归
 * - replace + JSON.parse 不合适
 * - replace + split 不靠谱
 */

// 1. 扩展运算符
export function flattenArray_v1(arr: any[]): any {
  const res = [];

  arr.map((item) =>
    Array.isArray(item) ? [...res, ...flattenArray_v1(item)] : [...res, item]
  );

  return res;
}

// 3. es6 的 flat 方法
export function flattenArray_v2(arr: any[]): any {
  if (!Array.isArray(arr)) return;
  return arr.flat();
}
