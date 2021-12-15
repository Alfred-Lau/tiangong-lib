/*
让实例可以访问到私有属性
让实例可以访问构造函数原型(constructor.prototype)所在原型链上的属性
如果构造函数返回的结果不是引用数据类型


实现 new 操作符

new操作符做了这些事：VIP !!!!

- 它创建了一个全新的对象。
- 它会被执行[[Prototype]]（也就是__proto__）链接。
- 它使this指向新创建的对象。。
- 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
- 如果函数没有返回对象类型Object(包含Function, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。

*/

const fake_new = (cons) => {
  /* 1. 创建一个全新的对象 */
  let res = {};

  /* 2. 绑定原型链连接 */
  if (cons.prototype !== null) {
    // !!!!对象的隐式原型指向构造函数的显式原型，因为不能使用 new，所以必须自己构造解决
    res.__proto__ = cons.prototype;
  }

  /* 3. 执行创建 */
  let ret = cons.apply(res, Array.prototype.slice.call(arguments, 1));

  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
    /* 4. 如果构造函数有返回值，并且不为 null， 那么就使用 返回值 */
    return ret;
  }

  return res;
};

module.exports = fake_new;

/*
为什么不能直接使用 slice 必须通过原型链上面的方便call ？

！！！因为 arguments 等类似数组对象并没有 数组方法！！！！！！

【类数组对象转换为数组的方式】

1. [...arguments]
2. Array.from(arguments)
3. [].slice.call(arguments)

*/
