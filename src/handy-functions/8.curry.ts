/**
 * 实现如下功能的函数
 * add(1)  1
 * add(1)(2) 3
 * add(1)(2)(3) 6
 * ...
 */

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

export function curry(fn, argument?) {
  let len = fn.length;

  return function () {
    const newArgs = Array.prototype.slice
      .call(arguments)
      .concat(argument || []);

    if (newArgs.length < len) {
      //  参数还没没有搜集结束,继续搜集参数
      return curry.call(this, fn, newArgs);
    } else {
      // 参数已满
      /* VIP: 注意此处是 apply 不是 call, 因为 apply 是要作用在数组上面的*/
      return fn.apply(this, newArgs);
    }
  };
}

export function curryES6(fn, argument = []) {
  return fn;
}

/* test case */

function multiFn(a, b, c) {
  return a * b * c;
}

const multi = curry(multiFn);
// const multi1 = curryES6(multiFn);

// console.log(multi(2)(3)(4));
// console.log(multi1(2)(3)(4));
console.log("----", multi(2, 3, 4));
console.log("----", multi(2)(3, 4));
console.log("----", multi(2, 3)(4));
