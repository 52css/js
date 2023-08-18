/**
 * ~~ 号的巧用
 * 【代码示例】
 * 可以使用双位操作符来替代正数的 Math.floor( )，替代负数的Math.ceil( )。双否定位操作符的优势在于它执行相同的操作运行速度更快。
 */
var num1 = 4.9
var num2 = -4.9

console.log(~~4.9)  // 4
console.log(Math.floor(4.9))  // 4

console.log(~~-4.9)  // -4
console.log(Math.ceil(-4.9))  // -4
