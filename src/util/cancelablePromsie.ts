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
    resolve("");
  }, 2000);
});

const cp = cancelPromise(p);

cp.cancel!("");
