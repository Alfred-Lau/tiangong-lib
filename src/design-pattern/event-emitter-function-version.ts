function FunctionEventEmitter(){
    this._events = {}
}

FunctionEventEmitter.prototype.on = function (type:string, listener:Function) {
    this._events[type] = (this._events[type] ||[]).push(listener)
}
FunctionEventEmitter.prototype.emit = function (type:string, ...args:any[]) {
    if(!this._events[type] || this._events[type].length === 0)
        return
    this._events[type].forEach((listener:Function) => listener.call(this, ...args))
}
/**
 * 难点实现
 * @param type
 * @param listener
 */
FunctionEventEmitter.prototype.once = function (type:string, listener:Function) {
    const fn = function (){
    }

    this._events[type] = (this._events[type] ||[]).push(fn)
}
FunctionEventEmitter.prototype.off = function (type:string, listener:Function) {
    this._events[type] = this._events[type].filter((func:Function)=>{
        return func !==listener
    })
}

export default FunctionEventEmitter
