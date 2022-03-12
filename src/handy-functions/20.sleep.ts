export function sleep(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export function sleep_v2(duration: number) {
  const time = new Date().getTime() + duration * 1000;
  while (new Date().getTime() > time) {
    return;
  }
}

// 不能把 await 和 settimeout 一起使用的原因是：settimeout 返回的不是一个 promise；更深刻的原因是 一个是浏览器提供，一个是语言特性
