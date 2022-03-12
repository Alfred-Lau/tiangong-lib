/*

实现bind之前，我们首先要知道它做了哪些事情。

1. 对于普通函数，绑定this指向
2. 对于构造函数，要保证原函数的原型对象上的属性不能丢失


注意：bind 函数只能通过函数 fn.bind 进行调用，所以最好实现为  Function.prototype.bind = funct
*/

import { isFunction } from "../type";
import { error } from "../invariant";
import { CALLER_MUST_BE_FUNCTION } from "../constans";

export function bind_v1(ctx: any = window) {
  if (!isFunction(this)) {
    error(CALLER_MUST_BE_FUNCTION);
  }

  let fn = this;
  // 排除 ctx 参数, 实用类数组对象的话 需要在 tsconfig 中 开启 downloadIterator 配置
  let args = [...arguments].slice(1);

  let resFn = function () {
    return fn.apply(this instanceof resFn ? this : ctx, args.concat(arguments));
  };

  // 修复原型
  const tmp = function () {};
  tmp.prototype = this.prototype;
  resFn.prototype = new tmp();

  return resFn;
}

// TODO：；另一种实现
Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Type Error");
  }
  // 保存this的值
  var self = this;

  return function F() {
    // 考虑new的情况
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }
    return self.apply(context, [...args, ...arguments]);
  };
};
