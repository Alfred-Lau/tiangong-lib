/**
 *
 * 防抖： 只执行一次
 */
export default function debounceFn(
  fn,
  wait: number = 200,
  isImmediate?: boolean
) {
  let timer: NodeJS.Timer | null = null;

  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }

    if (isImmediate && !timer) {
      fn.apply(this, args);
    }

    timer = setTimeout(function () {
      fn.apply(this, args);
    }, wait);
  };
}

window.addEventListener(
  "scroll",
  debounceFn(function () {
    console.log("ppppppp");
  })
);
