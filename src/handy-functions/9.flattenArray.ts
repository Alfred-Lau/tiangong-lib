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

/**
 *
 *
 *
 * export type Flatten<T extends readonly unknown[]> = T extends unknown[]
 *   ? _Flatten<T>[]
 *   : readonly _Flatten<T>[];
 *
 * export type _Flatten<T> = T extends readonly (infer U)[] ? _Flatten<U> : T;
 *
 * // export declare function flatArray_V1<T extends readonly unknown[]>(
 * //   xs: T
 * // ): Flatten<T>;
 *
 * // export function flatArray_V1<T extends readonly unknown[]>(arr: T): Flatten<T> {
 * //   let ret = [];
 * //   arr.forEach((item) => {
 * //     if (Array.isArray(item)) {
 * //       ret = ret.concat(flatArray_V1(item));
 * //     } else {
 * //       ret.push(item);
 * //     }
 * //   });
 * //
 * //   return ret;
 * // }
 *
 * export function flatArray_V1(arr) {
 *   let ret = [] as any;
 *   arr.forEach((item) => {
 *     if (Array.isArray(item)) {
 *       ret = ret.concat(flatArray_V1(item));
 *     } else {
 *       ret.push(item);
 *     }
 *   });
 *
 *   return ret;
 * }
 */
