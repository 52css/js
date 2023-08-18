/**
 * ?. 号的巧用
 * 【代码示例】
 */
// 数据容错性判断
var obj = {}

var name1 = obj && obj.item && obj.item.name // 传统写法

var name2 = obj?.item?.name // es11写法