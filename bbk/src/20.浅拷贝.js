/* 拷贝区别于 赋值 */

/*
1. [...arr]
2. slice()
3. Object.assign()
4. [1,2,3].concat()
5. 纯手写


*/
/* VIP：
手工实现 浅拷贝：1. 只拷贝一层；2. null 不处理；3. 先分简单和引用，再分数组和对象，最后只浅拷贝自有属性
*/
exports.shadowCopy = (target) => {
  if (typeof target === 'object' && target !== null) {
    const container = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        container[prop] = target[prop];
      }
    }
    return container;
  } else {
    return target;
  }
};
