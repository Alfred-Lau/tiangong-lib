export function filter<T>(
  arr: Array<T>,
  filterFn: (item: T, index: number) => boolean
): Array<T> {
  if (typeof filterFn !== "function") {
    throw new Error("Filter needs to be a function");
  }

  if (!Array.isArray(arr)) {
    throw new Error("arr should be an Array");
  }

  const ret: T[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    const isChosen = filterFn(item, i);
    if (isChosen) {
      ret.push(item);
    }
  }

  return ret;
}

const arr = [1, 2, 3, 4, 5];

function filterFn(item, index) {
  if (item % 2 === 0) {
    return true;
  }

  return false;
}

const result = filter(arr, filterFn);

console.log(result, result.length);

//  TODO: 标准版本
Array.prototype.filter2 = function (callback, thisArg) {
  if (this == undefined) {
    throw new TypeError("this is null or not undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  const res = [];
  // 让O成为回调函数的对象传递（强制转换对象）
  const O = Object(this);
  // >>>0 保证len为number，且为正整数
  const len = O.length >>> 0;
  for (let i = 0; i < len; i++) {
    // 检查i是否在O的属性（会检查原型链）
    if (i in O) {
      // 回调函数调用传参
      if (callback.call(thisArg, O[i], i, O)) {
        res.push(O[i]);
      }
    }
  }
  return res;
};

console.log("arr", arr.filter2(filterFn));
