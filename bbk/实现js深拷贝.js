/* 乞丐版 */

// const deepCopy = obj => {
//   return JSON.parse(JSON.stringify(obj));
// };

/* 面试够用版本 */

const deepCopy = obj => {
  // let result = {};
  if (typeof obj === 'object') {
    //引用数据类型 [对象，数组，函数]
    // 这一行还是很关键的！！
    var result = obj.constructor == Array ? [] : {};
    for (let i in obj) {
      result[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i];
    }
  } else {
    // 原生数据类型d
    result = obj;
  }

  return result;
};
/* test case */

const source = {
  age: 39,
  name: 'liujian',
  person: {
    name: 'xxx'
  }
};

const source02 = [1, 2, 2, 3, ['ddd']];

const target = deepCopy(source);
const target02 = deepCopy(source02);
source.name = 'xiaobao';
source.person.name = 'ddd';

console.log('target', target);
console.log('target02', target02);
