/* 左 是 右 的 实例： 对象是 构造函数的实例 */
const instanceOf = function (left, right) {
  const proto = left.__proto__;
  const prototype = right.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    /* 原型链一路上查 */
    proto = proto.__proto__;
  }
};
