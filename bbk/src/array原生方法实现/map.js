Array.prototype.map2 = function (cb, context) {
  if (this == null) {
    throw new Error('can not read property "map" from null or undefined');
  }

  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }

  // Step 1. 转成数组对象，有 length 属性和 K-V 键值对
  let O = Object(this);
  // Step 2. 无符号右移 0 位，左侧用 0 填充，结果非负
  /* 该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，左侧用0填充。因为符号位变成了 0，所以结果总是非负的。（译注：即便右移 0 个比特，结果也是非负的。） */
  let len = O.length >>> 0;
  // Step 3. cb 不是函数时抛出异常

  // Step 4.
  let T = context;
  // Step 5.
  let A = new Array(len);
  // Step 6.
  let k = 0;
  // Step 7.
  while (k < len) {
    // Step 7.1、7.2、7.3
    // 检查 O 及其原型链是否包含属性 k
    if (k in O) {
      // Step 7.3.1
      let kValue = O[k];
      // Step 7.3.2 执行 cb 函数
      // 传入 this, 当前元素 element, 索引 index, 原数组对象 O
      let mappedValue = cb.call(T, kValue, k, O);
      // Step 7.3.3 返回结果赋值给新生成数组
      A[k] = mappedValue;
    }
    // Step 7.4
    k++;
  }
  // Step 8. 返回新数组
  return A;
};
