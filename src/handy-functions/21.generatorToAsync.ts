export function generatorToAsync(generatorFn: Function) {
  return function () {
    const gen = generatorFn.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function step(key, args = undefined) {
        let result;
        try {
          result = gen[key](args);
        } catch (error) {
          return reject(error);
        }

        const { value, done } = result;
        if (done) {
          return resolve(value);
        } else {
          // 链式串行调用
          return Promise.resolve(value).then(
            (val) => step("next", val),
            (err) => step("throw", err)
          );
        }
      }
      step("next");
    });
  };
}

const getData = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(100), 1000));
const testGenerator = function* () {
  const data = yield getData();
  console.log("data", data);
  const data2 = yield getData();
  console.log("data2", data2);
};

const asyncFn = generatorToAsync(testGenerator);

asyncFn();
