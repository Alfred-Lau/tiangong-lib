class ClassEventEmitter {
    private _events:Record<string,Function>
    constructor() {
        this._events = {}
    }

    public on(event:string, listener:Function){}
    public off(event:string, listener:Function){}
    public once(event:string, listener:Function){}
    public emit(type:string, ...args:any[]){}
}

export default ClassEventEmitter
