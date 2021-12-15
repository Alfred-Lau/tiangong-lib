/*

MDN 对于 JS 数据类型的 看法

Number
String
Boolean
Symbol (new in ES2015)
Object
Function
Array
Date
RegExp
null
undefined

也许还有 BigInt 【stage 4】 ,ie 和 safari 完全不支持

*/

const _toString = Object.prototype.toString;

/* 1. 判断是否为正常非函数对象，而不是 null */
exports.isObjectButNotNull = (obj) =>
  obj !== null && _toString.call(obj) === '[object Object]';

/* 2. 判断是否为对象【包含函数】，不包含 null */
exports.isObject = (target) =>
  (typeof target === 'object' || typeof target === 'function') &&
  target !== null;
