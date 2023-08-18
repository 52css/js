/**
 * | 0 号的巧用
 * 【代码示例】
 * 对一个数字| 0可以取整，负数也同样适用，num | 0
 */
var num1 = 4.9
var num2 = -4.9

console.log(4.9 | 0)  // 4
console.log(Math.floor(4.9))  // 4

console.log(-4.9 | 0)  // -4
console.log(Math.ceil(-4.9))  // -4
