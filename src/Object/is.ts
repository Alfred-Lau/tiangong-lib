/**
 * Object.is 主要解决的问题
 *
 * +0 === -0  // true
 * NaN === NaN // false
 *
 *
 *
 * @param left
 * @param right
 */
export default function is(left, right): boolean {
  if (x === y) {
    // +0和-0应该不相等
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
