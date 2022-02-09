// import { isPlainObject } from "../type";
//
// // 这个是最佳做法，存在循环引用的问题
// export function deepClone(obj) {
//   /**
//    * 1. 简单对象直接赋值
//    * 2. 引用对象新建对象[区分数组和对象]
//    */
//
//   // 处理简单值
//   if (!isPlainObject(obj)) {
//     return obj;
//   }
//   // 数组初始值为 空数组，对象初始值为空对象
//   let ret: Record<string, any> = Array.isArray(obj) ? [] : {};
//
//   for (const item in obj) {
//     if (obj.hasOwnProperty(item)) {
//       ret[item] = isPlainObject(obj[item]) ? deepClone(obj[item]) : obj[item];
//     }
//   }
//
//   return ret;
// }
//
// /**
//  * 解决了循环引用的深拷贝
//  * @param obj
//  * @param map
//  *
//  * 参考：https://blog.csdn.net/cc18868876837/article/details/114918262
//  */
// export function deepCloneWithoutCycles(
//   obj: any,
//   map: WeakMap<any, any> = new WeakMap()
// ) {
//   if (obj instanceof Date) {
//     return Date;
//   }
//
//   if (obj instanceof RegExp) {
//     return RegExp;
//   }
//
//   if (isPlainObject(obj)) {
//     return obj;
//   }
//
//   if (map && map.has(obj)) {
//     return map.get(obj);
//   }
// }
//
// /**
//  * TODO: 待调整
//  * @param obj
//  * @param cache
//  */
// function deepClone_v2(obj, cache = new WeakMap()) {
//   if (typeof obj !== "object") return obj;
//   if (obj === null) return obj;
//   if (cache.get(obj)) return cache.get(obj); // 防止循环引用，程序进入死循环
//   if (obj instanceof Date) return new Date(obj);
//   if (obj instanceof RegExp) return new RegExp(obj);
//
//   // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
//   let cloneObj = new obj.constructor();
//   cache.set(obj, cloneObj); // 缓存拷贝的对象，用于处理循环引用的情况
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       cloneObj[key] = deepClone(obj[key], cache); // 递归拷贝
//     }
//   }
//   return cloneObj;
// }
//
// // 这个方法的实现有问题
// // export function deepCloneReduceVersion(obj: any) {
// //   if (!isPlainObject(obj)) {
// //     return obj;
// //   }
// //
// //   const keys = Object.keys(obj);
// //   return keys.reduce(
// //     (prev, cur) => {
// //       console.log("prev", prev, cur);
// //
// //       const value = obj[cur];
// //
// //       if (isPlainObject(value)) {
// //         if (Array.isArray(value)) {
// //           return prev.concat(deepCloneReduceVersion(value));
// //         } else {
// //           return {
// //             ...prev,
// //             [cur]: deepCloneReduceVersion(value),
// //           };
// //         }
// //       }
// //
// //       return Array.isArray(obj)
// //         ? prev.concat(value)
// //         : {
// //             ...prev,
// //             [cur]: value,
// //           };
// //     },
// //     Array.isArray(obj) ? [] : {}
// //   );
// // }
//
// /* test case */
//
// const source = {
//   age: 39,
//   name: "liujian",
//   person: {
//     name: "xxx",
//   },
// };
//
// const source02 = [1, 2, 2, 3, ["ddd"]];
// let source03 = 100;
//
// const target = deepClone(source);
// const target02 = deepClone(source02);
// const target03 = deepClone(source03);
// source.name = "xiaobao";
// source.person.name = "ddd";
// source03 = 200;
//
// console.log("target", target);
// console.log("target02", target02);
// console.log("target03", target03);

/**
 * 评价一个深拷贝是否完善，请检查以下问题是否都实现了：
 *
 * 基本类型数据是否能拷贝？
 * 键和值都是基本类型的普通对象是否能拷贝？
 * Symbol作为对象的key是否能拷贝？
 * Date和RegExp对象类型是否能拷贝？
 * Map和Set对象类型是否能拷贝？
 * Function对象类型是否能拷贝？（函数我们一般不用深拷贝）
 * 对象的原型是否能拷贝？
 * 不可枚举属性是否能拷贝？
 * 循环引用是否能拷贝？
 *
 */
export default function deepclone(target) {
  const map = new WeakMap();

  function isObject(target) {
    return (
      (typeof target === "object" && target) || typeof target === "function"
    );
  }

  function clone(data) {
    //1. 基础类型直接返回赋值拷贝
    if (!isObject(data)) {
      return data;
    }

    // 2. Date  RegExp 对象直接返回新的实例
    if ([Date, RegExp].includes(data.constructor)) {
      return new data.constructor(data);
    }

    if (typeof data === "function") {
      return new Function("return " + data.toString())();
    }

    const exist = map.get(data);
    if (exist) {
      return exist;
    }
    if (data instanceof Map) {
      const result = new Map();
      map.set(data, result);
      data.forEach((val, key) => {
        if (isObject(val)) {
          result.set(key, clone(val));
        } else {
          result.set(key, val);
        }
      });
      return result;
    }
    if (data instanceof Set) {
      const result = new Set();
      map.set(data, result);
      data.forEach((val) => {
        if (isObject(val)) {
          result.add(clone(val));
        } else {
          result.add(val);
        }
      });
      return result;
    }
    const keys = Reflect.ownKeys(data);
    const allDesc = Object.getOwnPropertyDescriptors(data);
    const result = Object.create(Object.getPrototypeOf(data), allDesc);
    map.set(data, result);
    keys.forEach((key) => {
      const val = data[key];
      if (isObject(val)) {
        result[key] = clone(val);
      } else {
        result[key] = val;
      }
    });
    return result;
  }

  return clone(target);
}

// test case

// 测试的obj对象
const obj = {
  // =========== 1.基础数据类型 ===========
  num: 0, // number
  str: "", // string
  bool: true, // boolean
  unf: undefined, // undefined
  nul: null, // null
  sym: Symbol("sym"), // symbol
  bign: BigInt(1n), // bigint

  // =========== 2.Object类型 ===========
  // 普通对象
  obj: {
    name: "我是一个对象",
    id: 1,
  },
  // 数组
  arr: [0, 1, 2],
  // 函数
  func: function () {
    console.log("我是一个函数");
  },
  // 日期
  date: new Date(0),
  // 正则
  reg: new RegExp("/我是一个正则/ig"),
  // Map
  map: new Map().set("mapKey", 1),
  // Set
  set: new Set().add("set"),
  // =========== 3.其他 ===========
  [Symbol("1")]: 1, // Symbol作为key
};

// 4.添加不可枚举属性
Object.defineProperty(obj, "innumerable", {
  enumerable: false,
  value: "不可枚举属性",
});

// 5.设置原型对象
Object.setPrototypeOf(obj, {
  proto: "proto",
});

// 6.设置loop成循环引用的属性
obj.loop = obj;

const copied = deepclone(obj);
console.log(copied);
