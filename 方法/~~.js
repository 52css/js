/**
 * ~~ 号的巧用
 * 双位操作符 ~~ 可以正数替代 Math.floor( )，负数替代 Math.ceil( )。
 * 【代码示例】
 */
var num1 = 4.9
var num2 = -4.9

console.log(~~4.9)  // 4
console.log(Math.floor(4.9))  // 4

console.log(~~-4.9)  // -4
console.log(Math.ceil(-4.9))  // -4
