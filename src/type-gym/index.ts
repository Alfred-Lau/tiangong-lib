export type TPartial<T> = {
  [P in keyof T]?: T[P];
};

export type TRequired<T> = {
  [P in keyof T]-?: T[P];
};
export type TPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
export type TExclude<T, U> = T extends U ? never : T;

export type TOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export type TRecord<K extends keyof any, T> = {
  [P in K]: T;
};

export type TReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
