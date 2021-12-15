const {
  restFlatten,
  reduceFlatten,
  flat,
  originalFlatten,
  splitFlatten,
  parseFlatten,
} = require('../src/9. flattenArray');

describe('restFlatten test', function () {
  test('should restFlatten', function () {
    const arr = [1, [2, [3, [4, 5]]], 6];
    expect(restFlatten(arr)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test('should reduceFlatten', function () {
    const arr = [1, [2, [3, [4, 5]]], 6];
    expect(reduceFlatten(arr)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should flat', function () {
    const arr = [1, [2, [3, [4, 5]]], 6];
    expect(flat(arr)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should originalFlatten', function () {
    const arr = [1, [2, [3, [4, 5]]], 6];
    // expect(originalFlatten(arr)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  // test('should splitFlatten', function () {
  //   const arr = [1, [2, [3, [4, 5]]], 6];
  //   expect(splitFlatten(arr)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  // // });
  // test('should parseFlatten', function () {
  //   const arr = [1, [2, [3, [4, 5]]], 6];
  //   expect(parseFlatten(arr)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  // });
});
