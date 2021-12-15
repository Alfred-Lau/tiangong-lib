/*


不同点：

函数防抖，在一段连续操作结束后，处理回调，利用clearTimeout 和 setTimeout 实现。

函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能。

函数防抖关注一定时间连续触发的事件只在最后执行一次，
而函数节流侧重于一段时间内只执行一次。

*/

/* throttle 英文是 油门 的意思；debounce 是 去抖动【防抖】的意思 */
exports.throttle = (fn, wait) => {
  let timer = null;
  let previous = +new Date();

  return function (...args) {
    let now = +new Date();

    if (now - previous < wait) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        // 切换时间为当前时间很关键，这是一个在整个运行时函数上下文都存在的时间，相当于是 React
        // 的 useRef，相当于是内存数据库！！！
        previous = now;
        fn.apply(this, args);
      }, wait);
    } else {
      // 切换时间为当前时间很关键，这是一个在整个运行时函数上下文都存在的时间，相当于是 React
      // 的 useRef，相当于是内存数据库！！！
      previous = now;
      fn.apply(this, args);
    }
  };
};

/* test demo */

const throttleFn = exports.throttle(() => {
  console.log('我是节流，我被执行了');
}, 5000);

throttleFn();
