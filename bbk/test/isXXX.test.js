const { isObjectButNotNull } = require('../src/19.isXXX');

describe('isObjectButNotNull test', function () {
  test('should return true is the target is real object', function () {
    expect(isObjectButNotNull({ name: 'liujian', age: 200 })).toBe(true);
    expect(isObjectButNotNull(null)).toBe(false);
    expect(isObjectButNotNull(3)).toBe(false);
    expect(isObjectButNotNull('liujian')).toBe(false);
  });
});
