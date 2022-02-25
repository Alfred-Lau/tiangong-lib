export function _asyncToGenerator(generatorFn: Function) {
  return function () {
    const gen = generatorFn.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function step(key, args = undefined) {
        let result;
        try {
          result = gen[key](args);
        } catch (error) {
          return reject(error);
        }

        const { value, done } = result;
        if (done) {
          return resolve(value);
        } else {
          // 链式串行调用
          return Promise.resolve(value).then(
            (val) => step("next", val),
            (err) => step("throw", err)
          );
        }
      }
      step("next");
    });
  };
}

const getData = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(100), 1000));
const testGenerator = function* () {
  const data = yield getData();
  console.log("data", data);
  const data2 = yield getData();
  console.log("data2", data2);
};

const asyncFn = _asyncToGenerator(testGenerator);

asyncFn();
//
// "use strict";
//
// function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
//   try {
//     var info = gen[key](arg);
//     var value = info.value;
//   } catch (error) {
//     reject(error);
//     return;
//   }
//   if (info.done) {
//     resolve(value);
//   } else {
//     Promise.resolve(value).then(_next, _throw);
//   }
// }
//
// function _asyncToGenerator(fn) {
//   return function () {
//     var self = this,
//       args = arguments;
//     return new Promise(function (resolve, reject) {
//       var gen = fn.apply(self, args);
//       function _next(value) {
//         asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
//       }
//       function _throw(err) {
//         asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
//       }
//       _next(undefined);
//     });
//   };
// }
//
// {
//   var sayhi = /*#__PURE__*/ (function () {
//     var _ref = _asyncToGenerator(
//       /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
//         return regeneratorRuntime.wrap(function _callee$(_context) {
//           while (1) {
//             switch ((_context.prev = _context.next)) {
//               case 0:
//                 console.log("hello,worlld");
//
//               case 1:
//               case "end":
//                 return _context.stop();
//             }
//           }
//         }, _callee);
//       })
//     );
//
//     return function sayhi() {
//       return _ref.apply(this, arguments);
//     };
//   })();
//
//   var result = await sayhi();
// }
