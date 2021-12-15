/* 单例模式 */

// es5 实现

let Singleton = function (name) {
  this._instance = null;
  this.name = name;
};

Singleton.prototype.getName = function () {
  return this.name;
};

Singleton.getInstance = function (name) {
  if (!this._instance) {
    this._instance = new Singleton(name);
  }
  // 一定要 return 才行
  return this._instance;
};

const a = Singleton.getInstance('a');
const b = Singleton.getInstance('b');

console.log(a, b, a === b);

// 使用 闭包 优化实现,上述方式 容易被修改 _instance

const ProxySingleton = (function () {
  let _instance = null;
  return function (Func) {
    if (!_instance) {
      _instance = new Func();
    }
    return _instance;
  };
})();

function A() {}
function B() {}

const c = ProxySingleton(A);
const d = ProxySingleton(B);

console.log(c, d, c === d);

// es6 实现 static
