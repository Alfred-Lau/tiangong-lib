/**
 * 分为四类
 * - 接口类
 * - 函数类
 * - 联合类型类
 * - 字符串类
 */

// 接口类
export type TPartial<T> = {
  [P in keyof T]?: T[P];
};

export type TRequired<T> = {
  [P in keyof T]-?: T[P];
};

export type TRecord<K extends keyof any, T> = {
  [P in K]: T;
};

export type TReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
export type TPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type TOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export type TExclude<T, U> = T extends U ? never : T;
export type TExtract<Type, Union> = {};
export type TNonNullable<T> = T extends null | undefined ? never : T;

// 函数类型

export type TParameters<T extends (...args: any) => void> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

export type TConstructorParameters<
  T extends abstract new (...args: any) => any
> = T extends abstract new (...args: infer R) => any ? R : never;

export type TReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

export type TInstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;

export type TThisParameterType<T> = "";
export type TOmitThisParameter<T> = "";
export type TThisType<T> = "";

// 字符串类型 Intrinsic String Manipulation Types

type StringType = "hello,world";

export type TUppercase<StringType> = "";
export type TLowercase<StringType> = "";
export type TCapitalize<StringType> = "";
export type TUncapitalize<StringType> = "";

/**
 * test case
 */
type returnedParam = TParameters<(num: number) => void>;

class lastOne {
  constructor(num: number, name: string) {}
}

type Constructor = {
  new (age?: number): any;
};

function FirstOne(name: Constructor) {
  return new name();
}

type returnConstructor = ConstructorParameters<typeof lastOne>;
type instance = TInstanceType<typeof lastOne>;
