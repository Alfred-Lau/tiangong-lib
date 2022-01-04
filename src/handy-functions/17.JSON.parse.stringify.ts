/**
 *
 * 模拟 JSON.parse
 */
export function parse(str: string) {
  //注意两边是括号，不是字符串
  return eval(`(${str})`);
}

export function parseV2(str: string) {
  return new Function(`return ${str}`)();
}

/**
 * TODO:
 * @param obj
 */
export function stringify(obj: any) {}

console.log(parse(JSON.stringify({ name: "ssss" })));
console.log(parseV2(JSON.stringify({ name: "ssss" })));
