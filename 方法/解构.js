/**
 * 解构 的巧用
 * 常用于数组交换、自定义变量名、获取剩余值、设置默认值、多层解构
 */
var arr = [1, 2, undefined, null, [5]];
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
[arr[1], arr[0]] = [arr[0], arr[1]];
console.log(arr);

// 自定义变量名
var [a, b] = arr;
var { a: a1, b: b1 } = obj;

console.log(a, b, a1, b1);

// 获取剩余值
var [a, b, ...restArr] = arr;
var { a: a1, b: b1, ...restObj } = obj;

console.log(restArr, restObj);

// 设置默认值
// var [, , c = "defaultC", d = "defaultD"] = arr;
var { 2: c = "defaultC", 3: d = "defaultD" } = arr;
var { c: c1 = "defaultC1", d: d1 = "defaultD1" } = obj;
console.log(c, d, c1, d1);

// 多层解构
var {
  4: [e],
} = arr;
var {
  e: { name: e1 },
} = obj;

console.log(e, e1)
