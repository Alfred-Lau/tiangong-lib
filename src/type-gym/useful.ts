export type Merge = "";

export type ReturnTypeofResolved<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

export type Equal = "";
