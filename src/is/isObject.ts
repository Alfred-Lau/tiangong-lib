/**
 * 检查是否是非空对象
 * @param val
 */
export function isObject(val: any): val is Object {
  return val !== null && typeof val === "object";
}
