function FunctionEventEmitter() {
    this._events = {};
}

FunctionEventEmitter.prototype.on = function (
    type: string,
    listener: Function
) {
    if (this._events[type]) {
        this._events[type].push(listener);
    } else {
        this._events[type] = [listener];
    }
};
FunctionEventEmitter.prototype.emit = function (type: string, ...args: any[]) {
    if (!this._events[type] || this._events[type].length === 0) return;

    this._events[type].forEach((listener: Function) =>
        listener.call(this, ...args)
    );
};
/**
 * 难点实现
 * @param type
 * @param listener
 */
FunctionEventEmitter.prototype.once = function (
    type: string,
    listener: Function
) {
    let foo = function (...args) {
        // 执行完注销，而不是注册完注销
        listener.call(this, ...args);
        this.off(type, foo);
    };
    (foo as any).link = listener;
    this.on(type, foo);
};

FunctionEventEmitter.prototype.off = function (
    type: string,
    listener: Function
) {
    this._events[type] = this._events[type].filter((func: any) => {
        return func !== listener && func.link !== listener;
    });
};

export default FunctionEventEmitter;
