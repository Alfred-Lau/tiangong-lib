/**
 * 参考资料：
 * https://juejin.cn/post/7045536402112512007
 */

export type Merge = "";

export type ReturnTypeofResolved<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : ReturnType<T>;

export type Equal = "";

export type Pop<T extends unknown[]> = T extends [...infer Rest, infer R]
  ? Rest
  : never;

type PopRes = Pop<[1, 2, 3]>;
const ret: PopRes = [1, 2];
