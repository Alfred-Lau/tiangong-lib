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
  const resolve = function (value) {
    console.log(value);
  };
  const reject = function (reason) {
    console.log(reason);
  };
  fn(resolve, reject);
}

export default promise;

const p1 = new promise((resolve, reject) => {
  resolve({ name: "fenghuo" });
  reject("error");
});
