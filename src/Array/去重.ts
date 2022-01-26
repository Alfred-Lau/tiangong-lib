/**
 * 作用：数组去重
 * @param arr
 */

export function removeDuplicate(arr) {
  return [...new Set(arr)];
}

export function removeDuplicate_v2(arr) {
  return Array.from(new Set(arr));
}

export function removeDuplicate_v3(arr) {
  const ret: any[] = [];
  arr.forEach((item) => {
    // includes indexOf
    if (!ret.includes(item)) {
      ret.push(item);
    }
  });
  return ret;
}
