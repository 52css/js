/**
 * ?. 号的巧用
 * 链判断运算符（?.）允许读取位于连接对象链深处的属性的值，
 * 而不必明确验证链中的每个引用是否有效。
 * 【代码示例】
 */
var obj = {}

var name1 = obj && obj.item && obj.item.name // 传统写法

var name2 = obj?.item?.name // es11写法