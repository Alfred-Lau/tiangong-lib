/*

实现 Promise 的 三个层次

1. 实现基础版本 ：回调函数延迟绑定、回调返回值穿透和错误冒泡。

2. 实现 resolve， reject 静态方法 ，finally 实例方法

3. 实现 race, all 方法
*/

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(fn) {
  let self = this;
  self.status = PENDING;
  self.error = null;
  self.value = null;

  self.onFulfilledCallbacks = []; // 成功的回调函数
  self.onRejectedCallbacks = []; // 失败的回调函数

  const resolve = value => {
    // 判断状态优先
    if (self.status !== PENDING) {
      return;
    }

    //TODO： 使用宏任务模拟微任务【Promise 实现为 微任务，但是浏览器不暴露 微任务的 api，所以通过 定时器来实现】，将执行实际放到整个脚本【宏任务】的最后面
    setTimeout(() => {
      self.status = FULFILLED;
      self.value = value;
      // self.onFulfilled(self.value);

      self.onFulfilledCallbacks.forEach(cb => {
        cb(self.value);
      });
    });
  };

  const reject = err => {
    if (self.status !== PENDING) {
      return;
    }

    setTimeout(() => {
      self.status = REJECTED;
      self.error = err;
      // self.onRejected(self.error);
      self.onRejectedCallbacks.forEach(cb => {
        cb(self.error);
      });
    });
  };

  fn(resolve, reject);
}

// TODO: 要理解 Promise ，重点在于理解 then 方法

Promise.prototype.then = function(fulfill, reject) {
  let self = this;
  let bridgePromise;
  let onFulfilled = typeof fulfill === 'function' ? fulfill : value => value;
  let onRejected =
    typeof reject === 'function'
      ? reject
      : error => {
          throw error;
        };

  const resolvePromise = function(bridgePromise, x, resolve, reject) {
    //如果x是一个promise
    if (x instanceof Promise) {
      // 拆解这个 promise ，直到返回值不为 promise 为止
      if (x.status === PENDING) {
        x.then(
          y => {
            resolvePromise(bridgePromise, y, resolve, reject);
          },
          error => {
            reject(error);
          }
        );
      } else {
        x.then(resolve, reject);
      }
    } else {
      // 非 Promise 的话直接 resolve 即可
      resolve(x);
    }
  };

  if (self.status === PENDING) {
    return (bridgePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        self.onFulfilledCallbacks.push(value => {
          try {
            // 看到了吗？要拿到 then 中回调返回的结果。
            let x = onFulfilled(value);
            resolvePromise(bridgePromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        self.onRejectedCallbacks.push(error => {
          try {
            let x = onRejected(error);
            resolvePromise(bridgePromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
    }));
  } else if (self.status === FULFILLED) {
    return (bridgePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // 状态变为成功，会有相应的 self.value
          let x = onFulfilled(self.value);
          // 暂时可以理解为 resolve(x)，后面具体实现中有拆解的过程
          resolvePromise(bridgePromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }));
  } else {
    return (bridgePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // 状态变为失败，会有相应的 self.error
          let x = onRejected(self.error);
          resolvePromise(bridgePromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }));
  }

  // 保证链式调用
  return self;
};

/* 实现 catch */
Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
};

/* 实现 resolve 和 reject */
Promise.resolve = param => {
  if (param instanceof Promise) return param;
  return new Promise((resolve, reject) => {
    if (param && param.then && typeof param.then === 'function') {
      // param 状态变为成功会调用resolve，将新 Promise 的状态变为成功，反之亦然
      param.then(resolve, reject);
    } else {
      resolve(param);
    }
  });
};

Promise.reject = function(reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

/* 实现实例上面的  finally */

Promise.prototype.finally = function(callback) {
  this.then(
    value => {
      return Promise.resolve(callback()).then(() => {
        return value;
      });
    },
    error => {
      return Promise.resolve(callback()).then(() => {
        throw error;
      });
    }
  );
};

/* 实现 静态方法 race 和 all */
Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    let len = promises.length;
    if (len === 0) return;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promise[i])
        .then(data => {
          resolve(data);
          return;
        })
        .catch(err => {
          reject(err);
          return;
        });
    }
  });
};

Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let index = 0;
    let len = promises.length;
    if (len === 0) {
      resolve(result);
      return;
    }

    for (let i = 0; i < len; i++) {
      // 为什么不直接 promise[i].then, 因为promise[i]可能不是一个promise
      Promise.resolve(promise[i])
        .then(data => {
          result[i] = data;
          index++;
          if (index === len) resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};

/* test case */

const fs = require('fs');

const readFilePromise = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

readFilePromise('./001.txt')
  .then(data => {
    console.log('data', data.toString());
    return readFilePromise('./002.txt');
  })
  .then(value => {
    console.log('value', value.toString());
  });
