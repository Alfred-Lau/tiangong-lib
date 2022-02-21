/**
 * 返回通用参数的内容部分类型
 */
export type ReturnDataType<T> = T extends { success: boolean; data: infer P }
  ? P
  : T;
