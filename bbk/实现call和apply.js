Function.prototype.call2 = function(content = window) {
  content.fn = this;
  /* 参数列表转数组 */
  let args = [...arguments].slice(1);
  /* 关键代码：主要就是为了切换调用者的上下文 */
  let result = content.fn(...args);
  delete content.fn;
  return result;
};
let foo = {
  value: 1
};
function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}
bar.call2(foo, 'black', '18'); // black 18 1

/* 实现 apply */

Function.prototype.apply2 = function(context = window) {
  context.fn = this;
  let result;
  // 判断是否有第二个参数
  if (arguments[1]) {
    /* 直接使用类数组转数组 */
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
