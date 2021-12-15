/* 防抖 */

exports.debounce = (fn, wait = 50, immediate) => {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    if (immediate && !timer) {
      fn.apply(this, args);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};

/* test case */

const debounceFn = exports.debounce(() => {
  console.log('防抖被执行了');
}, 5000);

debounceFn();
