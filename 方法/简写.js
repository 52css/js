/**
 * 简写 的巧用
 * 可以实现字符串转数字、数字转字符串
 * 【代码示例】
 */
// 默认参数值
var add = (a = 1, b = 2) => a + b;

// 对象属性赋值
let test1 = "a";
let test2 = "b";
let obj = { test1, test2 };

// 解构赋值
var { test1: test3, test2: test4 } = obj;

// 模板字符串
var welcome = 'hello' + test1 + 'world' + test2;
