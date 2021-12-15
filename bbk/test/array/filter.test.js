// const { map } = require('../../src/array原生方法实现/map');

/* 类似 polyfill 的使用方法 */
require('../../src/array原生方法实现/filter');

describe('array filter test', function () {
  test('应该执行 filter 的正常逻辑', function () {
    const target = [1, 2, 3, 4];
    const result = target.filter2((item) => item > 2);
    expect(result).toStrictEqual([3, 4]);
  });

  test('应该执行 filter 的使用 context 逻辑', function () {
    const target = [1, 2, 3, 4];
    const context = { diff: 3 };
    /* 此处不能使用箭头函数，绑定 this 的话，context 就会失去作用 */
    const result = target.filter2(function (item) {
      return item > this.diff;
    }, context);
    expect(result).toStrictEqual([4]);
  });
});
