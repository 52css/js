/**
 * * 号的巧用
 * 实现字符串转数字，代替Date.getTime()
 * 【代码示例】
 * ** 号代替 Math.pow()
 */

// 字符串转数字
var str1 = '123'

console.log(str1 * 1, typeof(str1 * 1))


// 代替日期.getSeconds()
var date = new Date()

console.log(date * 1, date * 1 === date.getTime())


// ** 的使用
var num = 10 ** 2

console.log(num === Math.pow(10, 2))
