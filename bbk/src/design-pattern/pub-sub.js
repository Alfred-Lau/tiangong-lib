/* es6 实现 */

class Event {
  constructor() {
    this.stack = {};
  }
  on(type, fn) {}

  once(type, fn) {}

  trigger(type) {}

  remove(type, fn) {}
}

const ee = new Event();

/* es 5 实现 */

// function ES5Event() {
//   let stack = {};
//   function on(type, fn) {
//     if (!stack[type]) {
//       stack[type] = [];
//     }

//     stack[type].push(fn);
//   }

//   function once(type, fn) {}

//   function trigger(type) {
//     stack[type].forEach((fn) => fn());
//   }

//   function remove(type, fn) {}

//   return {
//     on,
//     once,
//     trigger,
//     remove,
//   };
// }

function ES5Event() {
  let stack = {};
  function on(type, fn) {
    if (!this.stack[type]) {
      this.stack[type] = [];
    }

    this.stack[type].push(fn);
  }

  function once(type, fn) {}

  function trigger(type) {
    this.stack[type].forEach((fn) => fn());
  }

  function remove(type, fn) {}

  return {
    stack,
    on,
    once,
    trigger,
    remove,
  };
}

const es5 = new ES5Event();

// console.log(es5);
es5.on('e1', () => console.log('hello'));
es5.on('e1', () => console.log('hello again'));
es5.on('e2', () => console.log('hello again'));
es5.on('e3', () => console.log('hello again'));

es5.trigger('e1');
// es5.trigger('e2');
// es5.trigger('e3');
