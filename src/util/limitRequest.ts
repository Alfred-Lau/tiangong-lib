/**
 * 作用：异步控制并发请求数目
 *
 * 效果演示：https://lark-assets-prod-aliyun.oss-cn-hangzhou.aliyuncs.com/yuque/0/2022/png/251407/1643179117737-resources/24618473/png/c34d4f29-9fc0-4136-9413-d9b232c70043.png?OSSAccessKeyId=LTAI4GGhPJmQ4HWCmhDAn4F5&Expires=1643180929&Signature=iGr8DW0dKAY2VkxWmYp5UneEH8Q%3D
 */
import axios from "axios";

/**
 *
 * @param urls 请求地址
 * @param limit 并发数
 */
export function limitRequest(urls: string[], limit = 3) {
  return new Promise((resolve, reject) => {
    //直接缓存这个urls 的数组长度
    const len = urls.length;
    let count = 0;
    const results: any[] = [];

    function startProcessRequest() {
      const url = urls.shift();
      if (url) {
        axios
          .get(url)
          .then((data) => {
            results.push(data);
          })
          .catch((err) => {
            results.push(err);
          })
          .finally(() => {
            if (count === len - 1) {
              resolve(results);
            } else {
              count++;
              startProcessRequest();
            }
          });
      }
    }

    while (limit > 0) {
      startProcessRequest();
      limit -= 1;
    }
  });
}

// test case
const urls = [
  "https://lazy-minus-your-intelligence.com/api/mainsite/blog/detail?id=3",
  "https://lazy-minus-your-intelligence.com/api/mainsite/blog/detail?id=4",
  "https://lazy-minus-your-intelligence.com/api/mainsite/blog/detail?id=5",
  "https://lazy-minus-your-intelligence.com/api/mainsite/blog/detail?id=6",
  "https://lazy-minus-your-intelligence.com/api/mainsite/blog/detail?id=7",
];

limitRequest(urls)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
