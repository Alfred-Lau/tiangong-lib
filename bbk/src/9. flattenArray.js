/* 数组扁平化的方法 */

// 1. 扩展运算符

exports.restFlatten = (arr) => {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }

  return arr;
};

// 2. reduce 函数迭代

exports.reduceFlatten = (arr) => {
  return arr.reduce((previous, current) => {
    return previous.concat(
      Array.isArray(current) ? this.reduceFlatten(current) : current
    );
  }, []);
};

// 3. es6 的 flat 方法

exports.flat = function (arr) {
  /* 注意，需要加上参数 Infinity，depth ：拍平深度，默认是 1 */
  return arr.flat(Infinity);
};

// 4. 普通递归
let result = [];

exports.originalFlatten = (arr) => {
  /* 使用 for ,for...of, for...in 递归对象

  - for...of

  The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

  - for...in



  */

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      this.originalFlatten(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
};

// 5. replace + split [不靠谱，出来的都是字符串]

exports.splitFlatten = function (arr) {
  let str = JSON.stringify(arr);
  const res = str.replace(/(\[|\])/g, '').split(',');

  console.log('stringify', res);
  return res;
};

// 6. replace + JSON.parse [不靠谱]

exports.parseFlatten = function (arr) {
  let str = JSON.stringify(arr);
  str = str.replace(/(\[|\]))/g, '');
  str = '[' + str + ']';
  ary = JSON.parse(str);
  return ary;
};
