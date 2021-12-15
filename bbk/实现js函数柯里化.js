/* 
函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。
函数柯里化，是可以用来慢慢凑齐参数，延迟函数的执
*/

/* 1. 通用解法 */
const curry = (fn, argument) => {
  const length = fn.length;
  let args = argument || [];

  const slice = Array.prototype.slice;
  return function() {
    // 搜集参数
    const newArgs = args.concat(slice.call(arguments));

    if (newArgs.length < length) {
      // 如果参数还未收集满
      return curry.call(this, fn, newArgs);
    } else {
      // 参数收集完成
      return fn.apply(this, newArgs);
    }
  };
};

/* 2. es6 写法 */
const curry = (fn, arr = []) => (...args) =>
  (a => (a.length === fn.length ? fn(...a) : curry(fn, a)))([...arr, ...args]);

function multiFn(a, b, c) {
  return a * b * c;
}

var multi = curry(multiFn);

console.log(multi(2)(3)(4));
console.log(multi(2, 3, 4));
console.log(multi(2)(3, 4));
console.log(multi(2, 3)(4));
