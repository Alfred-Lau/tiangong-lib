/*
类数组对象转数组的三种方式：

//第一种方法
Array.prototype.slice.call(arrayLike, start);
//第二种方法
[...arrayLike];
//第三种方法:
Array.from(arrayLike);


*/

export const slice = Array.prototype.slice;

export default function call(scope: any = window, ...rest) {
  let ret;
  let context = scope;
  context.fn = this;
  if (arguments[1]) {
    ret = context.fn(slice.call(rest));
  } else {
    ret = context.fn();
  }

  return ret;
}

// TODO： 另一种实现
Function.prototype.call = function (context = window, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Type Error");
  }
  const fn = Symbol("fn");
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
};
