/*

function *testG(){
	const result = yield 100;
  	return result
}

babel 编译为 第三方库代码

*/

'use strict';

var _marked = /*#__PURE__*/ regeneratorRuntime.mark(testG);

function testG() {
  var result;
  return regeneratorRuntime.wrap(function testG$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return 100;

        case 2:
          result = _context.sent;
          return _context.abrupt('return', result);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}
