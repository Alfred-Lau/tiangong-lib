import eventEmitterFunctionVersion from "../../src/design-pattern/event-emitter-function-version";

const EVENT_NAME = "event_001";

let ev;
let fakeFn;

beforeEach(() => {
    ev = new eventEmitterFunctionVersion();
    fakeFn = jest.fn();
});

test("should emit & on", () => {
    ev.on(EVENT_NAME, fakeFn);
    ev.emit(EVENT_NAME, 100, "hello,world");
    expect(fakeFn).toHaveBeenCalledTimes(1);
});

test("should off", () => {
    ev.on(EVENT_NAME, fakeFn);
    ev.off(EVENT_NAME, fakeFn);
    ev.emit(EVENT_NAME, 100, "hello,world");
    expect(fakeFn).not.toHaveBeenCalled();
});

test("should emit once", () => {
    ev.once(EVENT_NAME, fakeFn);
    ev.emit(EVENT_NAME);
    ev.emit(EVENT_NAME);
    expect(fakeFn).toHaveBeenCalledTimes(1);
});

test("should emit nothing if off is called", () => {
    ev.once(EVENT_NAME, fakeFn);
    ev.off(EVENT_NAME, fakeFn);
    ev.emit(EVENT_NAME);
    expect(fakeFn).not.toHaveBeenCalled();
});
