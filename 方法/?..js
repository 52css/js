/**
 * ?. 的巧用
 * 链判断运算符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。
 * 【代码示例】
 */
var obj = {}

var name1 = obj && obj.test && obj.test.name;

var name2 = obj?.test?.name;

console.log(name1)
console.log(name2)