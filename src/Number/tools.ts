/**
 * 判断一个数是奇数还是偶数
 * @param val
 */
export function isEven(val: number): boolean {
  return val % 2 === 0;
}

/**
 * 获得一组数的平均值
 * @param args
 */
export function average(...args: number[]): number {
  return args.reduce((a, b) => a + b, 0) / args.length;
}

/**
 * 获取两个整数之间的随机整数
 */
export function getRandomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 指定位数四舍五入
 */
export function getRound(n, d) {
  // @ts-ignore
  return Number(Math.round(`${n}e${d}`) + "e-" + d);
}

console.log(getRound(1.005, 2)); //1.01
