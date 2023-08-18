/**
 * + 号的巧用
 */
// string转number
var str1 = '123'
console.log(+str1, typeof +str1)

// number转string
var num1 = 123
console.log( num1 + '', typeof(num1 + ''))

// 代替日期.getSeconds()
var date = new Date()
console.log(date * 1)