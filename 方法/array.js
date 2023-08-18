/**
 * 15 个 JS 数组精简技巧，一起来看看
 */

// 1. 删除数组的重复项
var arr1 = [1, 2, 3, 4, 5, 5, 6, 6, 7];

console.log([...new Set(arr1)]);

// 2. 替换数组中的特定值
var arr2 = [1, 2, 3, 4, 5, 5, 6, 6, 7];

arr2.splice(0, 2, "新插入1", "新插入2");

console.log(arr2);

// 3. 从数组中提取数据
var arr3 = [
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 3, name: "王五" },
  { id: 4, name: "赵六" },
];

console.log(arr3.map((x) => x.name));

// 4. 清空数组
var arr4 = [1, 2, 3, 4, 5, 5, 6, 6, 7];

arr4.length = 0;

// 5. 将数组转换为对象
var arr5 = ["a", "b", "c", "d", "e", "f"];

console.log({ ...arr5 });

// 6. 用数据填充数组
var arr6 = new Array(5).fill(1);

console.log("arr6", arr6);

// 7. 数组合并
var arr7_1 = ["a", "b", "c"];
var arr7_2 = ["d", "e"];
var arr7_3 = ["g", "h", "i"];

console.log([...arr7_1, ...arr7_2, ...arr7_3]);

// 8. 求两个数组的交集
var arr8_1 = [1, 2, 3, 4, 5, 6];
var arr8_2 = [3, 4, 5, 6, 7, 8];

console.log(arr8_1.filter((x) => arr8_2.includes(x)));

// 9. 从数组中删除虚值
// 在 JS 中，虚值有 false, 0，''， null, NaN, undefined。咱们可以 .filter() 方法来过滤这些虚值。
var arr9 = [1, 2, false, "", undefined, null, 0, NaN, 3, 4, 5, 6];

console.log(arr9.filter(Boolean));

// 10. 从数组中获取随机值
var arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 普通
console.log(arr10[Math.floor(Math.random() * arr10.length)]);

// 也可以
console.log(arr10.sort(() => Math.random() - 0.5)[0]);

// 11. 数组反转
var arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr11.reverse());

// 12. lastIndexOf() 方法
var arr12 = [1, 2, 5, 3, 4, 5, 6, 7, 8, 9];

console.log(arr12.lastIndexOf(5));

// 13. 对数组中的所有值求和
var arr13 = [1, 5, 2, 6];

console.log(arr13.reduce((x, y) => x + y));

// 14. 数组转对象
var arr14 = [
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 3, name: "王五" },
  { id: 4, name: "赵六" },
];

console.log(
  arr14.reduce((prev, item) => {
    prev[item.id] = item;
    return prev;
  }, {})
);

// 15. 数组at

var arr15 = [1, 2, 3, 4, 5];

console.log(arr15.at(-1));
