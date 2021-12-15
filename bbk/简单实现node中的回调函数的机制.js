/* 

回调函数的方式其实内部利用了 发布-订阅 模式，在这里我们以模拟实现 node 中的 Event 模块为例来写实现回调函数的机制。 

*/

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  _wrapCallback(fn, once) {
    return {
      callback: fn,
      once
    };
  }

  /**
   *添加一个事件监听
   *
   * @memberof EventEmitter
   */
  addEventListener(type, fn, once = false) {
    const handler = this.events.get(type);
    if (!handler) {
      // 第一次添加
      this.events.set(type, this._wrapCallback(fn, once));
    } else if (handler && typeof handler.callback === 'function') {
      // 第二次添加
      this.events.set(type, [handler, this._wrapCallback(fn, once)]);
    } else {
      handler.push(this._wrapCallback(fn, once));
    }
  }

  /**
   *移除事件监听
   *
   * @memberof EventEmitter
   */
  removeEventListener(type, listener) {
    const handler = this.events.get(type);
    // 处理事件不存在情况
    if (!handler) {
      return;
    }

    // 处理单事件去情况
    if (!Array.isArray(handler)) {
      if (handler.callback === listener.callback) {
        this.events.delete(type);
      } else {
        return;
      }
    }

    // 处理事件数组情况
    for (let i = 0; i < handler.length; i++) {
      const item = handler[i];
      if (item.callback === listener.callback) {
        handler.splice(i, 1);
        i--;
        if (handler.length === 1) {
          this.events.set(type, handler[0]);
        }
      }
    }
  }

  /**
   *移除所有事件监听
   *
   * @memberof EventEmitter
   */
  removeAllEventListeners(type) {
    const handler = this.events.get(type);
    if (!handler) {
      return;
    } else {
      this.events.delete(type);
    }
  }

  /**
   *触发事件
   *
   * @memberof EventEmitter
   */
  emit(type, ...args) {
    const handler = this.events.get(type);
    if (!handler) {
      return;
    }

    if (Array.isArray(handler)) {
      // 遍历列表，执行回调

      handler.map(fn => {
        fn.callback.apply(this, args);
        if (fn.once) {
          // 标记的 once: true 的项直接移除

          this.removeEventListener(type, fn);
        }
      });
    } else {
      // 只有一个回调则直接执行

      handler.callback.apply(this, args);
    }
  }

  /**
   *只监听一次
   *
   * @memberof EventEmitter
   */
  once(type, fn) {
    this.addEventListener(type, fn, true);
  }
}

module.exports = EventEmitter;

/* 

以上实现存在需要优化的地方

1. 在参数少的情况下，call 的性能优于 apply，反之 apply 的性能更好。因此在执行回调时候可以根据情况调用 call 或者 apply。

2. 考虑到内存容量，应该设置回调列表的最大值，当超过最大值的时候，应该选择部分回调进行删除操作。

3. 鲁棒性有待提高。对于参数的校验很多地方直接忽略掉了。

*/
