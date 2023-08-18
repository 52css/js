/**
 * ?? 号的巧用
 * 空值合并操作符（nullish coalescing operator）是一个逻辑操作符，
 * 当左侧的操作数为 null 或 undefined 时，返回其右侧操作数，
 * 否则返回左侧操作数。
 * 【代码示例】
 */
var str1 = '0'
var num1 = 0

console.log(str1 || 'hello') // '0'
console.log(num1 || 'hello') // 'hello'

console.log(str1 ?? 'hello') // '0'
console.log(num1 ?? 'hello') // 0