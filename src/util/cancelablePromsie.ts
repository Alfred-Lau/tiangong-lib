/**
 * 具备取消功能的promise函数
 */
export default function cancelPromise(
  promise: Promise<any>
): Promise<any> & { cancel: ((reason: string) => void) | undefined } {
  let cancel: ((reason: string) => void) | undefined = undefined;
  let isCanceled = false;

  const cancelPromise = new Promise<any>((resolve, reject) => {
    cancel = (reason: string) => {
      isCanceled = true;
      reject(reason);
    };
  });

  const racePromise = Promise.race([promise, cancelPromise]).catch((err) => {
    if (isCanceled) {
      return new Promise(() => {});
    }

    return Promise.reject(err);
  });

  return Object.assign(racePromise, { cancel });
}

const p = new Promise((resolve) => {
  setTimeout(() => {
    console.log("print");
    resolve("我是正常的返回");
  }, 4000);
});

const cp = cancelPromise(p);
cp.then((res) => console.log(res)).catch((err) => console.log(err));
setTimeout(() => cp.cancel!("cccccc"), 2000);

/**
 * 具备 cancel 功能的简易实现: 参考文件：https://juejin.cn/post/6847902216028848141
 */
//
// function abortWrapper(original) {
//   let abort;
//
//   let p1 = new Promise((resolve, reject) => {
//     return (abort = reject);
//   });
//
//   let p = Promise.race([p1, original]) as Promise<any> & {
//     abort: (msg: string) => void;
//   };
//   p.abort = abort;
//
//   return p;
// }
//
// const request = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("收到服务端数据");
//   }, 3000);
// });
//
// const req = abortWrapper(request);
// req
//   .then((res) => console.log("resp", res))
//   .catch((e) => console.log("error", e));
// setTimeout(() => req.abort("用户手动终止请求"), 2000); // 这里可以是用户主动点击
// setTimeout(() => req.abort("用户手动终止请求"), 2000); // 这里可以是用户主动点击
