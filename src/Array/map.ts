// import { isFunction } from "../type";
// import { error } from "../invariant";

export default function map(arr, mapFn, thisArg?: any) {}

Array.prototype.map02 = function (callback, thisArg) {
  if (this == undefined) {
    throw new TypeError("this is null or not defined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const res = [];
  // 同理
  const O = Object(this);
  const len = O.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in O) {
      // 调用回调函数并传入新数组
      res[i] = callback.call(thisArg, O[i], i, this);
    }
  }
  return res;
};
