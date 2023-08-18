/**
 * 数组 at 的巧用
 * 【代码示例】
 */
var arr = [1, 2, 3, 4, 5]
// 以前获取最后一位
console.log(arr[arr.length - 1]) //5
// 简化后
console.log(arr.at(-1)) // 5