// 节流函数
function throttleFn(fn, wait: number = 500) {
  let timer: NodeJS.Timer | null = null;
  let previous = +new Date();

  let retFn = function throttledFn(...args) {
    let now = +new Date();

    if (now - previous < wait) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        previous = +new Date();
        fn.apply(this, args);
      }, wait);
    } else {
      previous = +new Date();
      fn.apply(this, args);
    }
  };

  return retFn;
}

// 节流变量:一段时间之后才允许修改某个变量

function throttleValue(value, wait) {}

export { throttleFn, throttleValue };

function print() {
  console.log("log issued");
}

const fn = throttleFn(print, 5000);

fn();
