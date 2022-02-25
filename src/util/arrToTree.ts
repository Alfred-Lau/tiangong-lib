let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];
const result = [];

/**
 * 一维数组转换为 树形结构 【递归实现的时间复杂度为O(2^n)。】
 * @param arr 待转化数组
 * @param pid 父 id
 * @param result 最终的数组
 * @constructor
 */
export function ArrayToTree_recur(arr, pid = 0, result: any[] = []) {
  for (const item of arr) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      ArrayToTree_recur(arr, item.id, newItem.children);
    }
  }
}

// 性能很差
function newArrFn(arr, rootValue = 0) {
  return arr.reduce((acc, cur) => {
    if (cur.pid === rootValue) {
      const children = newArrFn(arr, cur.id);
      if (children.length) {
        cur.children = children;
      }
      acc.push(cur); // 返回值 新数组的长度
    }
    return acc;
  }, []);
}
console.log("------", newArrFn(arr));

//O(n)
function arrayToTree(items) {
  const result = []; // 存放结果集
  const itemMap = {}; //

  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
  }

  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}

//O(n)，需要一个Map把数据存储起来，空间复杂度O(n)  性能最佳
function arrayToTree_v3(items) {
  const result = []; // 存放结果集
  const itemMap = {}; //
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]["children"],
    };

    const treeItem = itemMap[id];

    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}

ArrayToTree_recur(arr, 0, result);
console.log(result);

/**
 *
 *
 *
 * [
 *     {
 *         "id": 1,
 *         "name": "部门1",
 *         "pid": 0,
 *         "children": [
 *             {
 *                 "id": 2,
 *                 "name": "部门2",
 *                 "pid": 1,
 *                 "children": []
 *             },
 *             {
 *                 "id": 3,
 *                 "name": "部门3",
 *                 "pid": 1,
 *                 "children": [
 *                     // 结果 ,,,
 *                 ]
 *             }
 *         ]
 *     }
 * ]
 */
