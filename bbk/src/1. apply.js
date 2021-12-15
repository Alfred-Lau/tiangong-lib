/* 类数组

    拥有length属性，其它属性（索引）为非负整数（对象中的索引会被当做字符串来处理）;
    不具有数组所具有的方法；
    类数组是一个普通对象，而真实的数组是Array类型。

常见的类数组有: 函数的参数arguments, DOM对象列表(比如通过 document.querySelectorAll 得到的列表),jQuery 对象 (比如 $("div")).

类数组可以转换为数组:

//第一种方法
Array.prototype.slice.call(arrayLike, start);
//第二种方法
[...arrayLike];
//第三种方法:
Array.from(arrayLike);
任何定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组。

Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象。 */

/* func.apply(thisArg, [ argsArray]) */
Function.prototype.apply2 = function (context = window) {
  context.fn = this;
  let res;
  if (arguments[1]) {
    res = context.fn(...arguments[1]);
  } else {
    res = context.fn();
  }

  delete context.fn;
  return res;
};
