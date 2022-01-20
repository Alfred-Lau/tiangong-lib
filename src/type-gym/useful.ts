export type Merge = "";

export type ReturnTypeofResolved<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : ReturnType<T>;

export type Equal = "";
