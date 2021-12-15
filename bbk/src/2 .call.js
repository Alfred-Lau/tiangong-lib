/*
类数组对象转数组的三种方式：

//第一种方法
Array.prototype.slice.call(arrayLike, start);
//第二种方法
[...arrayLike];
//第三种方法:
Array.from(arrayLike);


*/

Function.prototype.call2 = function (content = window) {
  content.fn = this;
  /* 参数列表转数组 */
  let args = [...arguments].slice(1);
  /* 关键代码：主要就是为了切换调用者的上下文 */
  let result = content.fn(...args);
  delete content.fn;
  return result;
};

/* 为什么需要 套用 eval？ 老版本es 不支持 rest操作符*/

Function.prototype.call = function (context, ...args) {
  var context = context || window;
  context.fn = this;

  var result = eval('context.fn(...args)');

  delete context.fn;
  return result;
};

Function.prototype.apply = function (context, args) {
  let context = context || window;
  context.fn = this;
  let result = eval('context.fn(...args)');

  delete context.fn;
  return result;
};
