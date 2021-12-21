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
