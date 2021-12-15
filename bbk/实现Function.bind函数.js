/* 

实现bind之前，我们首先要知道它做了哪些事情。

1. 对于普通函数，绑定this指向
2. 对于构造函数，要保证原函数的原型对象上的属性不能丢失


*/

Function.prototype.bind2 = function (content) {
  if (typeof this != 'function') {
    throw Error('not a function');
  }
  // 若没问参数类型则从这开始写,接收两个参数，上下文和参数
  /* let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]]) */
  let fn = this;
  let args = [...arguments].slice(1);

  let resFn = function () {
    return fn.apply(
      this instanceof resFn ? this : content,
      args.concat(...arguments)
    );
  };
  function tmp() {}
  tmp.prototype = this.prototype;
  resFn.prototype = new tmp();

  return resFn;
};

Function.prototype.bind3 = function (context) {
  /*  1. 保证 该函数的调用者为 函数 */
  if (typeof this !== 'function') {
    throw Error('not a function');
  }

  /* 2. 保存 该函数和函数参数 方便返回调用 */
  let fn = this;
  let args = [...arguments].slice(1);

  let resFn = function () {
    return fn.apply(
      this instanceof resFn ? this : context,
      args.concat(...arguments)
    );
  };

  // 3. 处理由于返回新函数引入的原型链问题
  function tmp() {}
  tmp.prototype = this.prototype;
  resFn.prototype = new temp();

  return resFn;
};

Function.prototype.bind4 = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error(
      'Function.prototype.bind - what is trying to be bound is not callable'
    );
  }

  var self = this;

  var fbound = function () {
    self.apply(
      this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };

  fbound = Object.create(this.prototype);

  return fbound;
};
