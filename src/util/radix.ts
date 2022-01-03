/**
 * 进制转换：16 进制转换为 2 进制
 */
export function formatRadix(
  target: string,
  targetRadix: number,
  destRadix: number
): string {
  return parseInt(target, targetRadix).toString(destRadix);
}

const target = "1000";
console.log(formatRadix(target, 16, 2));
