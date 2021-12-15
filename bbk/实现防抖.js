const debounce = (fn, wait) => {
  let timer;

  return function() {
    if (timer) {
      clearTimeout(time);
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
};
