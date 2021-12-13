/**
 * 检查是否是非空对象
 * @param val
 */
export function isPlainObject(val: any) : val is Object {
  return val !== null && typeof val === "object";
}

/**
 * 判断对象不是空
 * @param obj
 */
export function isNotNullOrUndefined(obj: any):boolean{
  return obj !== undefined && obj !== null
}
