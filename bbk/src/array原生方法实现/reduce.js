/*

reduce 可以理解为「归一」，意为海纳百川，万剑归一，完整的结构是 Array.prototype.reduce(callbackfn[, initialValue])，这里第二个参数并不是 thisArg 了，而是初始值 initialValue，关于初始值之前有介绍过。

如果没有提供 initialValue，那么第一次调用 callback 函数时，accumulator 使用原数组中的第一个元素，currentValue 即是数组中的第二个元素。
如果提供了 initialValue，accumulator 将使用这个初始值，currentValue 使用原数组中的第一个元素。
在没有初始值的空数组上调用 reduce 将报错。



*/

Array.prototype.reduce2 = function (callbackfn, initialValue) {
  // 异常处理
  if (this == null) {
    throw new TypeError("Cannot read property 'map' of null or undefined");
  }
  if (typeof callbackfn !== 'function') {
    throw new TypeError(callbackfn + ' is not a function');
  }
  let O = Object(this);
  let len = O.length >>> 0;
  let k = 0,
    accumulator;

  // 新增
  if (initialValue) {
    accumulator = initialValue;
  } else {
    // Step 4.
    if (len === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    // Step 8.
    let kPresent = false;
    while (!kPresent && k < len) {
      kPresent = k in O;
      if (kPresent) {
        accumulator = O[k];
      }
      k++;
    }
  }

  while (k < len) {
    if (k in O) {
      let kValue = O[k];
      accumulator = callbackfn.call(undefined, accumulator, kValue, k, O);
    }
    k++;
  }
  return accumulator;
};
