/**
 * 数组 random 随机数的巧用
 * 【代码示例】
 */
const arr = [1, 2, 3, 4, 5]

console.log(arr.sort(() => Math.random() - 0.5)[0])