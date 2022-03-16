- globalThis 在 nodejs 10.x 的测试环境中不支持，所以要注释掉


TODO
- 自定义可读流可写流
- 【！！！】体操练习
- 手写一个 promise
- 【待整理】正则表达式整理：https://juejin.cn/post/7016871226899431431?utm_source=gold_browser_extension#heading-3
- 【待整理】js 一行代码走天下：https://github.com/1milligram/1loc

需要重点掌握的
- 深浅拷贝完整版本 done
- promise的完整版本，可以取消版本
- 各类继承方式的实现 done
- 防抖 & 节流 小点
- 原生的 TS Utility 的实现

## how to start


### npm run dev:html

在 test.html 中直接引用查看效果

### 测试 promise 的执行

```bash
 promises-aplus-tests valina-promise.js
```


## 其他

1. 随机布尔值
   该方法可以返回一个随机的布尔值，使用Math.random()可以获得0-1的随机数，与0.5进行比较，就有一半的概率获得真值或者假值。
   const randomBoolean = () => Math.random() >= 0.5;

2. 变量交换
   可以使用以下形式在不适用第三个变量的情况下，交换两个变量的值：
   [foo, bar] = [bar, foo];
3. 获取变量的类型
   该方法用于获取一个变量的类型：
   const trueTypeOf = (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

trueTypeOf('');     // string
trueTypeOf(0);      // number
trueTypeOf();       // undefined
trueTypeOf(null);   // null
trueTypeOf({});     // object
trueTypeOf([]);     // array
trueTypeOf(0);      // number
trueTypeOf(() => {});  // function

4. 华氏度和摄氏度之间的转化
   该方法用于摄氏度和华氏度之间的转化：
   const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
   const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

celsiusToFahrenheit(15);    // 59
celsiusToFahrenheit(0);     // 32
celsiusToFahrenheit(-20);   // -4
fahrenheitToCelsius(59);    // 15
fahrenheitToCelsius(32);    // 0
5. 检测对象是否为空
   该方法用于检测一个JavaScript对象是否为空：
   const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

异步可以作为一个专题：
- 异步并发数限制
- 异步串行 
- 异步并行
- 实现一个 Promise

函数式编程也可以作为一个专题；
- 科里化函数


设计模式也可以作为一个专题；
- 事件总线 & 发布订阅模式

继承可以作为一个专题；
- 寄生组合继承
