/**
 * ~ 的巧用
 * 按位非操作符 (~) 会对参加运算的一个数据按二进制进行取反运算
 * ~~ 运算符
 * 双按位非操作符号 (~~) 正数可以替代 Math.floor( )，负数替代 Math.ceil( )
 * 【代码示例】
 */
console.log(~-1) // 0
console.log(~0) // -1
console.log(~1) // -2
console.log(~2) // -3

// 用于indexOf判断是否存在
var arr1 = [1, 2, 3, 4];

console.log(~arr1.indexOf(3) && 'hello1')
console.log(~arr1.indexOf(100) && 'hello2')


// 用于取整
var num1 = 4.9;
var num2 = -4.9;

console.log(~~num1, ~~num1 === Math.floor(num1)) // 4 true
console.log(~~num2, ~~num2 === Math.ceil(num2)) // -4 true
