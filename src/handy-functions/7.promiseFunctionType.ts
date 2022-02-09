const PENDING = Symbol("Promise#PENDING");
const FULFILLED = Symbol("Promise#FULFILLED");
const REJECTED = Symbol("Promise#REJECTED");

/**
 * 需要依次解决的问题
 * 1. 结构初始化
 * 2. 支持简单的 then
 *
 * @param fn
 */

function promise(fn) {
  // 缓存状态
  this.status = PENDING;
  this.value = null;
  this.error = null;

  // 成功失败回调队列
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = function (value) {
    if (this.status !== PENDING) {
      return;
    }
    this.status = FULFILLED;
    this.value = value;
  };
  const reject = function (reason) {
    if (this.status !== PENDING) {
      return;
    }

    this.status = REJECTED;
    this.error = reason;
  };

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

promise.prototype.then = function (resolveFn, rejectFn) {
  console.log(this.value, this.reason);

  if (resolveFn) resolveFn();
};

export default promise;

const p1 = new promise((resolve, reject) => {
  resolve({ name: "fenghuo" });
  reject("error");
});

p1.then((res) => console.log("response"));
