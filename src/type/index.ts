/**
 * 检查是否是非空对象
 * @param val
 */
export function isPlainObject(val: any): val is Object {
  return val !== null && typeof val === "object";
}

/**
 * 判断对象不是空
 * @param obj
 */
export function isNotNullOrUndefined(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

/**
 * 判断对象为真值
 * @param val
 */
export function isTruth(val: any): boolean {
  return !isFalsy(val);
}

/**
 * 判断对象为假值【Falsy的值有 八个，其他的都是真值】
 * 参考地址：https://www.yuque.com/xiaoxiang-ofbro/bz4agy/zv8nkg#JJVPy
 * @param val
 */
export function isFalsy(val: any): boolean {
  return true;
}

/**
 * 判断 变量是否为函数
 * @param obj
 */
export function isFunction_v2(obj: any): obj is Function {
  return typeof obj === "function";
}

/**
 * 通用判断体系：https://www.cnblogs.com/bq-med/p/8796836.html
 * 深入解读：https://zhuanlan.zhihu.com/p/118793721
 */

/**
 * 若参数为 null 或 undefined，直接返回结果。
 * 若参数不为 null 或 undefined，则将参数转为对象，再作判断。
 * 对于原始类型，转为对象的方法即装箱，此处不赘述。
 * 转为对象后，取得该对象的 [Symbol.toStringTag] 属性值（可能会遍历原型链）作为 tag，
 * 如无该属性，或该属性值不为字符串类型，则依下表取得 tag, 然后返回 "[object " + tag + "]" 形式的字符串。
 */

//
const toString = Object.prototype.toString;

// .call 或者 Reflect.apply(Object.prototype.toString, x, []);
export const isNumber = (value) => toString.call(value) === "[object Number]";
export const isString = (value) => toString.call(value) === "[object String]";
export const isUndefined = (value) =>
  toString.call(value) === "[object Undefined]";
export const isBoolean = (value) => toString.call(value) === "[object Boolean]";
export const isObject = (value) => toString.call(value) === "[object Object]";
export const isArray = (value) => toString.call(value) === "[object Array]";
// 区别于 Object.prototype.toString(a) 和 isFunction_v2
export const isFunction = (value) =>
  toString.call(value) === "[object Function]";
export const isNull = (value) => toString.call(value) === "[object Null]";
export const isPromise = (value) => toString.call(value) === "[object Promise]";

//typeof 判断基础类型；instanceOf 和 constructor 判断引用类型
