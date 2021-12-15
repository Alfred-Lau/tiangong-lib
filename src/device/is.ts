export function isIOS(ua: string): boolean {
  const IS_IOS_REG = /iphone|ipad|ipod/i;
  return IS_IOS_REG.test(ua);
}
