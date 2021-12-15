/* 手写 async await ： 实现 Promise 串行 */
const asyncToGenerator = function (generatorFunc) {
  return function () {
    /* 先要首次执行，拿到 生成器 */
    const gen = generatorFunc.app(this, arguments);
    return new Promise((resolve, reject) => {
      function step(key, args) {
        let generatorResult;
        try {
          generatorResult = gen[key][args];
        } catch (error) {
          return reject(error);
        }

        const { value, done } = generatorResult;
        if (done) {
          return resolve(value);
        } else {
          /* Promise  函数串行的 关键逻辑 */
          return Promise.resolve(value).then(
            (val) => {
              return step('next', val);
            },
            (err) => step('throw', err)
          );
        }
      }

      step('next');
    });
  };
};
