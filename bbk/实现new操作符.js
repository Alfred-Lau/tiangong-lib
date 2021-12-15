/* 



*/

function New(func) {
  /* 1. 创建一个全新的对象 */
  var res = {};
  /* 2. 绑定原型链链接 */
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }

  /* 3. 执行 */
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
    /* 5. 如果构造函数有返回值，那么就使用返回值 */
    return ret;
  }
  /* 4. 返回 */
  return res;
}
var obj = New(A, 1, 2);
// equals to
var obj = new A(1, 2);
