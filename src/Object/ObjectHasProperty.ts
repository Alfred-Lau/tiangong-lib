/**
 * 判断对象实例上上属性是否存在
 * @link 参考文件：https://juejin.cn/post/7055653496007163940?utm_source=gold_browser_extension
 * @param property
 * @param obj
 * @constructor
 */

/**
 * 优点：简洁
 * 缺点：会判断原型链上的属性 in会判断继承过来的属性！ 'toString' in {} true
 * @param property
 * @param obj
 * @constructor
 */
export function PropertyInObject(property: string, obj): boolean {
  return property in obj;
}

/**
 * es6 和 in 完全一样
 * @param property
 * @param obj
 * @constructor
 */
export function PropertyInObject_v3(property: string, obj): boolean {
  return Reflect.has(obj, property);
}

/**
 * 特点：
 * 1. hasOwnProperty这个方法可以用来检测一个对象是否含有特定的自身属性，即是用来判断一个属性是定义在对象本身而不是继承自原型链的，
 * 2. 通过对象字面量或者构造函数法创建的对象都从Object.prototype继承了hasOwnProperty()。
 *
 * 缺点：
 * 1. 不支持create
 * 2. 会被覆盖：覆盖报错
 *
 *
 * 改进方式：Object.prototype.hasOwnProperty()
 *
 * 用法：Object.prototype.hasOwnProperty.call(obj, propName);，接受两个参数。请注意我们这里用到了call。改变this的指向。
 * Object.prototype.hasOwnProperty除了支持hasOwnProperty的相同用法，同时还解决了hasOwnProperty的两个缺点。
 *
 *
 * @param property
 * @param obj
 * @constructor
 */
export function PropertyInObject_v2(property: string, obj): boolean {
  return obj.hasOwnProperty(property);
}

export function PropertyInObject_v5(property: string, obj): boolean {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

/**
 * ES13（ES2022）Object.hasOwn()
 * Object.hasOwn()，目前来看就是替代Object.prototype.hasOwnProperty.call()。
 * 如果用Object.prototype.hasOwnProperty.call() 来封装的话，代码如下：
 *
 * @param property
 * @param obj
 * @constructor
 */
export function PropertyInObject_v4(property: string, obj: Object): boolean {
  return obj.hasOwn(property);
}

declare interface Object {
  hasOwn: (prop: string) => boolean;
}
