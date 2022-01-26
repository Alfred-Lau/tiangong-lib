/**
 * 作用：获取 URL 参数
 */

export function getURLParams(url?: string): Record<string, any> {
  const target = url ? url.split("?")[1] : window.location.search;

  // 创建一个URLSearchParams实例
  const urlSearchParams = new URLSearchParams(target);
  // 把键值对列表转换为一个对象
  const params = Object.fromEntries(urlSearchParams.entries());

  return params;
}

export function getURLParams_v2(url?: string): Record<string, any> {
  const ret = {};
  const target = url ? url.split("?")[1] : window.location.search;

  if (target) {
    const arr = target.split("&");
    arr.forEach((item) => {
      const [key, val] = item.split("=");
      ret[key] = decodeURIComponent(val);
    });
  }

  return ret;
}

const user = getURLParams_v2(
  "http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16"
);
const user_v2 = getURLParams(
  "http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16"
);
console.log(user, user_v2); // { user: '阿飞', age: '16' }
