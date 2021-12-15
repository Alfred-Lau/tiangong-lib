const EventEmitter = require('./简单实现node中的回调函数的机制');

const ee = new EventEmitter();

ee.addEventListener('type', () => {
  console.log('type 事件被触发');
});

ee.addEventListener('type', () => {
  console.log('type 事件再次被触发');
});

function f() {
  console.log('type事件我只触发一次');
}
ee.once('type', f);
ee.emit('type');
ee.emit('type');
ee.removeAllEventListeners('type');
ee.emit('type'); // 无打印
