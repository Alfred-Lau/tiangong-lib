/* 

1. 使用 reduce 实现

*/

let ary = [1, 2, [3, 4], [5, [6, 7]]];
const flatten = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};

const res = flatten(ary);

console.log(res);

/*  */
