import { isPlainObject } from "../type";

// 这个是最佳做法，存在循环引用的问题
export function deepClone(obj) {
  /**
   * 1. 简单对象直接赋值
   * 2. 引用对象新建对象[区分数组和对象]
   */

  // 处理简单值
  if (!isPlainObject(obj)) {
    return obj;
  }
  // 数组初始值为 空数组，对象初始值为空对象
  let ret: Record<string, any> = Array.isArray(obj) ? [] : {};

  for (const item in obj) {
    if (obj.hasOwnProperty(item)) {
      ret[item] = isPlainObject(obj[item]) ? deepClone(obj[item]) : obj[item];
    }
  }

  return ret;
}

/**
 * 解决了循环引用的深拷贝
 * @param obj
 * @param map
 *
 * 参考：https://blog.csdn.net/cc18868876837/article/details/114918262
 */
export function deepCloneWithoutCycles(obj: any, map:WeakMap<any, any> = new WeakMap()) {

  if (obj instanceof Date){
    return Date
  }

  if (obj instanceof RegExp){
    return RegExp
  }

  if (isPlainObject(obj)){
    return obj
  }

  if (map && map.has(obj)){
    return map.get(obj)
  }




}




// 这个方法的实现有问题
// export function deepCloneReduceVersion(obj: any) {
//   if (!isPlainObject(obj)) {
//     return obj;
//   }
//
//   const keys = Object.keys(obj);
//   return keys.reduce(
//     (prev, cur) => {
//       console.log("prev", prev, cur);
//
//       const value = obj[cur];
//
//       if (isPlainObject(value)) {
//         if (Array.isArray(value)) {
//           return prev.concat(deepCloneReduceVersion(value));
//         } else {
//           return {
//             ...prev,
//             [cur]: deepCloneReduceVersion(value),
//           };
//         }
//       }
//
//       return Array.isArray(obj)
//         ? prev.concat(value)
//         : {
//             ...prev,
//             [cur]: value,
//           };
//     },
//     Array.isArray(obj) ? [] : {}
//   );
// }

/* test case */

const source = {
  age: 39,
  name: "liujian",
  person: {
    name: "xxx",
  },
};

const source02 = [1, 2, 2, 3, ["ddd"]];
let source03 = 100;

const target = deepClone(source);
const target02 = deepClone(source02);
const target03 = deepClone(source03);
source.name = "xiaobao";
source.person.name = "ddd";
source03 = 200;

console.log("target", target);
console.log("target02", target02);
console.log("target03", target03);
