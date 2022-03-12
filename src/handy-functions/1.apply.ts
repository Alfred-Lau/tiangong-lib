export default function apply(scope: any = window) {
  let ret;
  let context = scope;
  context.fn = this;
  if (arguments[1]) {
    ret = context.fn(arguments[1]);
  } else {
    ret = context.fn();
  }
  return ret;
}

// TODO: 另一种实现
Function.prototype.apply = function (context = window, args) {
  if (typeof this !== "function") {
    throw new TypeError("Type Error");
  }
  const fn = Symbol("fn");
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
};
