/* 实现 发布订阅模式
 */
function myEvent() {
  this.observerEvent = {};
  this.on = function (eventType, handler) {
    if (!(eventType in this.observerEvent)) {
      //如果没有订阅该事件，则该事件为空数组
      this.observerEvent[eventType] = [];
    }
    this.observerEvent[eventType].push(handler); //同一个订阅事件的回调会放在一个数组里
    return this;
  };
  this.trigger = function (eventType) {
    let ev = Array.prototype.slice.call(arguments, 0, 1); //获取t触发trigger（）时的 第一个参数，为触发时的事件名
    let args = Array.prototype.slice.call(arguments, 1); //获取触发trigger（）传过来的全部参数
    for (let event in this.observerEvent) {
      //遍历observerEvent
      if (ev == eventType) {
        //判断ev事件是否已经在（订阅）observerEvent里
        for (let i = 0; this.observerEvent[ev].length > i; i++) {
          //遍历ev里所有的函数，并执行
          this.observerEvent[ev][i](...args);
        }
      }
    }
  };
  return this;
}
let event = new myEvent();
event.on('foo', function () {
  console.log('foo fire');
});
event.on('foo', function (a) {
  console.log(a);
});
event.on('bar', function (a, b) {
  console.log(a + ' ' + b);
});
event.trigger('foo');
event.trigger('foo', 1);
event.trigger('bar', 2, 3);
