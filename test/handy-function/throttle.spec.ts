import { throttleFn } from "../../src/handy-functions";

const mockFn = jest.fn();
const fn = throttleFn(mockFn, 10);

test("should throttle 500 ms before print", () => {
  // 同步调用两次
  // fn(1);
  // fn(2);
  //
  // setTimeout(() => {
  //   const calls = mockFn.mock.calls;
  //
  //   // 断言 mock方法只调用一次
  //   expect(calls.length).toBe(1);
  //   // 根据参数判断以第一次调用为准
  //   expect(calls[0][0]).toBe(1);
  //   done();
  // }, 50);
});
