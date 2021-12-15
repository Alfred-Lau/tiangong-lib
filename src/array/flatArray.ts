export type Flatten<T extends readonly unknown[]> = T extends unknown[]
  ? _Flatten<T>[]
  : readonly _Flatten<T>[];

export type _Flatten<T> = T extends readonly (infer U)[] ? _Flatten<U> : T;

// export declare function flatArray_V1<T extends readonly unknown[]>(
//   xs: T
// ): Flatten<T>;

// export function flatArray_V1<T extends readonly unknown[]>(arr: T): Flatten<T> {
//   let ret = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       ret = ret.concat(flatArray_V1(item));
//     } else {
//       ret.push(item);
//     }
//   });
//
//   return ret;
// }

export function flatArray_V1(arr) {
  let ret = [] as any;
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      ret = ret.concat(flatArray_V1(item));
    } else {
      ret.push(item);
    }
  });

  return ret;
}
