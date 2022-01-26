/**
 * 字符串首字母大写
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 翻转字符串
 */
export function reverse(str: string): string {
  return str.split("").reverse().join("");
}
/**
 * 生成随机字符串
 */
export function getRandomString(): string {
  // 36 = 10 + 26
  return Math.random().toString(36).slice(2);
}

/**
 * 从指定长度处截断字符串
 */
export function truncate(str: string, length: number): string {
  return str.length < length ? str : `${str.slice(0, length - 3)}...`;
}

/**
 * 去除字符串中的HTML元素
 */
export function stripHtml(html: string): string {
  return (
    new DOMParser().parseFromString(html, "text/html").body.textContent || ""
  );
}

// test case
const ret01 = truncate(
  "Hi, I should be truncated because I am too loooong!",
  36
); // 'Hi, I should be truncated because...'
console.log(ret01);
console.log(stripHtml("<p>hello</p>"));
console.log(getRandomString());
