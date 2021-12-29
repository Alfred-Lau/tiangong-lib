export interface XhrConfig {
  data: any;
  timeout?: number;
}

export default function xhr(url: string, config?: XhrConfig) {
  // 1. 初始化 xhr 实例
  const instance = new XMLHttpRequest();

  // 2. 打开链接
  instance.open("GET", url);

  // 3. 事件监听
  instance.onerror = function onError(e) {
    console.log(e);
  };

  instance.onload = function onLoad(result) {
    console.log(result);
  };

  instance.send(config?.data);
}
