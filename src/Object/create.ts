/**
 * Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
 * @param proto
 */
export default function create(proto) {
  // 原型式继承
  function f() {}

  f.prototype = proto;
  return new f();
}

/*
MDN polyfill

 if (typeof Object.create !== "function") {
    Object.create = function (proto, propertiesObject) {
        if (typeof proto !== 'object' && typeof proto !== 'function') {
            throw new TypeError('Object prototype may only be an Object: ' + proto);
        } else if (proto === null) {
            throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
        }

        if (typeof propertiesObject != 'undefined') {
            throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
        }

        function F() {}
        F.prototype = proto;

        return new F();
    };
}


*/

export function createV2(proto, propertyObject = undefined) {
  if (typeof proto !== "object" && typeof proto !== "function") {
    throw new TypeError("Object prototype may only be an Object or null.");
  }
  if (propertyObject == null) {
    new TypeError("Cannot convert undefined or null to object");
  }

  function F() {}

  F.prototype = proto;
  const obj = new F();
  if (propertyObject != undefined) {
    Object.defineProperties(obj, propertyObject);
  }
  if (proto === null) {
    // 创建一个没有原型对象的对象，Object.create(null)
    obj.__proto__ = null;
  }
  return obj;
}
const origin = {
  name: "liujian",
};

const copy = create(origin);

console.log(copy.name);
