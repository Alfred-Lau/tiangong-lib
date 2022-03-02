/**
 *
 * 和CORS相比，JSONP 最大的优势在于兼容性好，IE 低版本不能使用 CORS 但可以使用 JSONP，缺点也很明显，请求方法单一，只支持 GET 请求。
 */

export interface jsonParams {
  url: string;
  params: object;
  callbackName?: string;
}

export function jsonp(params: jsonParams) {
  const buildUrl = function ({ url, params, callbackName }: jsonParams) {
    let dataStr = "";

    for (const key in params) {
      dataStr += `${key}=${params[key]}&`;
    }

    dataStr = dataStr.slice(0, -1);
    dataStr += `callback=${callbackName}`;

    return `${url}?${dataStr}`;
  };

  return new Promise((resolve, reject) => {
    const { callbackName } = params;
    //    创建script 标签
    const url = buildUrl(params);
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    window[callbackName] = function (resp) {
      console.log("我是jsonp的返回值", resp);
      resolve(resp);
      document.body.removeChild(script);
    };
  });
}

jsonp({
  url: "http://localhost/api/v1/jsonp",
  params: { name: "ja", age: 99 },
  callbackName: "fn",
}).then((val) => console.log(val));

/**
 *
 * 服务端需要进行的改造
 * let express = require('express')
 * let app = express()
 * app.get('/', function(req, res) {
 *   let { a, b, callback } = req.query
 *   console.log(a); // 1
 *   console.log(b); // 2
 *   // 注意哦，返回给script标签，浏览器直接把这部分字符串执行
 *   res.end(`${callback}('数据包')`);
 * })
 * app.listen(3000)
 *
 * 前端使用方法
 * jsonp({
 *   url: 'http://localhost:3000',
 *   params: {
 *     a: 1,
 *     b: 2
 *   }
 * }).then(data => {
 *   // 拿到数据进行处理
 *   console.log(data); // 数据包
 * })
 */
