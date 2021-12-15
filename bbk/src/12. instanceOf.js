/**
 * 判断 左值 是否是 右值 的实例
 *
 * @param {*} left
 * @param {*} right
 */
const instanceOf2 = function (left, right) {
  /* 左值：我要一步步向上爬 */
  let proto = left.__proto__;
  /* 右值：以不变应万变 */
  let prototype = right.prototype;
  while (true) {
    /* 说明到了原型链的顶端 */
    if (proto === null) {
      return false;
    }

    if (proto === prototype) {
      return true;
    }

    proto = proto.__proto__;
  }
};

const leftValue = [1, 2, 3, 4, 4];
console.log(instanceOf2(leftValue, Array)); //true
console.log(instanceOf2(leftValue, Object)); // true
console.log(instanceOf2(leftValue, Function)); //false
