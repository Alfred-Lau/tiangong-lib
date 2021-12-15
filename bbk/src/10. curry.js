/*

函数柯里化

1. 参数复用
2. 提前返回
3. 延迟执行

*/

/*
const fn = function(a,b,c){return a+b+c}
fn.length //3


*/

exports.curry = (fn, argument) => {
  const length = fn.length;
  return function (...args) {
    const newArgs = args.concat(argument || []);
    if (newArgs.length < length) {
      // 参数还没有满

      return exports.curry.call(this, fn, newArgs);
    } else {
      // 参数已满
      /* VIP: 注意此处是 apply 不是 call, 因为 apply 是要作用在数组上面的*/
      return fn.apply(this, newArgs);
    }
  };
};

// const curry = (fn, argument) => {
//   const length = fn.length;
//   let args = argument || [];

//   const slice = Array.prototype.slice;
//   return function () {
//     // 搜集参数
//     const newArgs = args.concat(slice.call(arguments));

//     if (newArgs.length < length) {
//       // 如果参数还未收集满
//       return curry.call(this, fn, newArgs);
//     } else {
//       // 参数收集完成
//       return fn.apply(this, newArgs);
//     }
//   };
// };

/* 其实这里的 this 是不是比较多余，绑定了 this */
exports.es6curry = (fn, argument = []) => (...args) =>
  ((a) =>
    a.length < fn.length
      ? exports.es6curry.call(this, fn, a)
      : fn.apply(this, a))([...argument, ...args]);
/* test case */

function multiFn(a, b, c) {
  return a * b * c;
}

var multi = exports.curry(multiFn);
var multi1 = exports.es6curry(multiFn);

// console.log(multi(2)(3)(4));
console.log(multi1(2)(3)(4));
// console.log(multi(2, 3, 4));
// console.log(multi(2)(3, 4));
// console.log(multi(2, 3)(4));
