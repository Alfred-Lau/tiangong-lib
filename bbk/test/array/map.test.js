// const { map } = require('../../src/array原生方法实现/map');

/* 类似 polyfill 的使用方法 */
require('../../src/array原生方法实现/map');

describe('array map test', function () {
  test('应该执行 map 的正常逻辑', function () {
    const target = [1, 2, 3, 4];
    const result = target.map2((item) => item * 2);
    expect(result).toStrictEqual([2, 4, 6, 8]);
  });

  test('应该执行 map 的使用 context 逻辑', function () {
    const target = [1, 2, 3, 4];
    const context = { diff: 10 };
    /* 此处不能使用箭头函数，绑定 this 的话，context 就会失去作用 */
    const result = target.map2(function (item) {
      return item * this.diff;
    }, context);
    expect(result).toStrictEqual([10, 20, 30, 40]);
  });
});
