/**
 * 左值 是 右值 的实例
 * @param left
 * @param right
 */
export default function instanceOf(left: any, right: any) {
  // 左侧是 实例，获取 __proto__
  let proto = left.__proto__;
  // 右侧是原型
  const prototype = right.prototype;

  while (true) {
    //未找到，到顶
    if (proto === null) {
      return false;
    }

    // 找到
    if (proto === prototype) {
      return true;
    }
    //向上遍历
    proto = proto.__proto__;
  }
}

// test case

const leftValue = [1, 2, 3, 4, 4];
console.log(instanceOf(leftValue, Array)); //true
console.log(instanceOf(leftValue, Object)); // true
console.log(instanceOf(leftValue, Function)); //false
