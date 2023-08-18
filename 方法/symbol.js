/**
 * 你可能不知道的符号
 */

// + 号的妙用
// 1.1 string转number
var str1 = '123'
console.log(+str1, typeof +str1)
// 1.2 number转string
var num1 = 123
console.log( num1 + '', typeof(num1 + ''))
// 1.3 代替日期.getSeconds()
var date1 = new Date()
console.log(date1 * 1)