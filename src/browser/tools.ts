/**
 * 1. 复制内容到剪切板
 */
export function copyToClipboard(text: string) {
  return window.navigator.clipboard.writeText(text);
}

/**
 * 2. 清除所有cookie
 */
export function clearCookies() {
  document.cookie
    .split(";")
    .forEach(
      (cookie) =>
        (document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
    );
}

/**
 * 3. 获取选中的文本
 */

export function getSelectedText() {
  return window.getSelection()?.toString();
}

/**
 * 4. 检测是否是黑暗模式
 */
export function isDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

/**
 * 5. 滚动到页面顶部
 */

export function goToTop() {
  window.scrollTo(0, 0);
}

/**
 * 6. 判断当前标签页是否激活
 */
export function isTabInView() {
  return !document.hidden;
}

/**
 * 7. 判断当前是否是苹果设备
 */

export function isAppleDevice() {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}

/**
 * 8. 是否滚动到页面底部
 */
export function scrolledToBottom() {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    document.documentElement.scrollHeight
  );
}

/**
 * 9. 重定向到一个URL
 */
export function redirect(url) {
  return (location.href = url);
}

/**
 * 10. 打开浏览器打印框
 */
export function openPrint() {
  return window.print();
}
