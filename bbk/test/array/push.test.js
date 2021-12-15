// const { push } = require('../../src/array原生方法实现/map');

/* 类似 polyfill 的使用方法 */
require('../../src/array原生方法实现/push-pop');

describe('array push test', function () {
  test('应该执行 push 的正常逻辑', function () {
    const target = [1, 2, 3, 4];
    const result = target.push2(5, 6, 7, 8);
    expect(result).toBe(8);
  });
});
