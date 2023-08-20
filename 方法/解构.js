/**
 * 解构
 */
var arr = [1, 2, undefined, null, 5];
var obj = {
  a: "a",
  b: "b",
  c: undefined,
  d: null,
  e: {
    name: "e",
  },
};

// 数组交换
([arr[1], arr[0]] = [arr[0], arr[1]]);
console.log("1", arr);

// 设置变量名
var [a2, b2] = arr;
var { a: a3, b: b3 } = obj;

console.log("2", a2, b2, a3, b3);

// 获取剩余值
var [a2, b2, ...restArr] = arr;
var { a: a3, b: b3, ...restObj } = obj;

console.log("3", restArr, restObj);

// 设置默认值
var { 2: c3 = "c3", 3: d3 = "d3" } = arr;
var { c: c4 = "c4", d: d4 = "d4" } = obj;

console.log("4", c3, d3, c4, d4);

// 多层解构

var {
  e: { name },
} = obj;

console.log("5", name);
