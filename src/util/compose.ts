// 函数式编程的 compose 支持 同步、异步

// 同步
function compose(...fns) {
  if (fns.length === 0) {
    return (args) => args;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce(
    (a, b) =>
      (...args) =>
        b(a(...args))
  );
}
// 千分符号
function thousandSplit(num) {
  return String(num).replace(/(?=\B(?:\d{3})+\b)(\d{3}(\.\d+$)?)/g, ",$1");
}
// 保留两位数字向下取整
function floor(num) {
  return (Math.floor(num * 100) / 100).toFixed(2);
}

const num = 125885.365;
console.log("正常我们的做法", thousandSplit(floor(num)));
console.log("compose", compose(floor, thousandSplit)(num));

// 异步
(async () => {
  function compose(...fns) {
    if (fns.length === 0) {
      return (args) => args;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return fns.reduce(
      (a, b) =>
        async (...args) =>
          b(await a(...args))
    );
  }
  function fn1(arg) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        arg += "_Promise_fn1";
        console.log("fn1");
        resolve(arg);
      }, 1000);
    });
  }
  function fn2(arg) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        arg += "_Promise_fn2";
        console.log("fn2");
        resolve(arg);
      }, 1000);
    });
  }
  function fn3(arg) {
    arg += "_fn3";
    return arg;
  }
  const result = compose(fn1, fn3, fn2);
  result(1).then((res) => {
    console.log("异步返回", res);
  });
})();
