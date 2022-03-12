/**
 * 作用：数组去重的若干种方法
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

const unique1 = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
        len--;
        j--;
      }
    }
  }
  return arr;
};

const unique2 = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
  }
  return res;
};

const unique4 = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};

const unique5 = (arr) => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
};
